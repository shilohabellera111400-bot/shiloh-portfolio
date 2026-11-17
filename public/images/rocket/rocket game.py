import pygame
import random
import pygame.font

# Initialize pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT), pygame.RESIZABLE)
pygame.display.set_caption("Rocket Launch")

# Colors
WHITE = (255, 255, 255)
RED = (255, 0, 0)
BLACK = (0, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
ORANGE = (255, 165, 0)
LIME_GREEN = (50, 205, 50)

# Fonts - Initialized ONCE here
pygame.font.init()
font = pygame.font.SysFont("Inconsolata", 30)
large_font = pygame.font.SysFont("Times New Roman", 30)
small_font = pygame.font.SysFont("Inconsolata", 25)
small_font_grid = pygame.font.Font(None, 36)

# Load assets
background_img = pygame.image.load('Background.png') 
background_img = pygame.transform.scale(background_img, (WIDTH, HEIGHT))
rocket_img = pygame.image.load('RocketSymbol (2).png')
rocket_img = pygame.transform.scale(rocket_img, (130, 180))
fuel_img = pygame.image.load('Gas tank.png')
fuel_img = pygame.transform.scale(fuel_img, (40, 40))
explosion_img = pygame.image.load('ExplotionEffect.png')
explosion_img = pygame.transform.scale(explosion_img, (300, 300))

# Cartesian plane settings
grid_size = 50

def cartesian_to_screen(x, y, origin_x, origin_y):
    return origin_x + x * grid_size, origin_y - y * grid_size

def screen_to_cartesian(mx, my, origin_x, origin_y):
    return (mx - origin_x) // grid_size, (origin_y - my) // grid_size

# Game variables
level = 1
total_fuel = level + 4

def generate_fuel_positions():
    fuel_positions = set()
    while len(fuel_positions) < total_fuel:
        fuel_positions.add((random.randint(-4, 4), random.randint(-4, 4)))
    return list(fuel_positions)

fuel_positions = generate_fuel_positions()
fuel_collected = 0
score = 0
game_over = False
rocket_crashed = False
rocket_launched = False
explosion = False
running = True
clock = pygame.time.Clock()

# Rocket settings
rocket_cx, rocket_cy = 0, 0
rocket_velocity = 0
falling = True

# Buttons
start_game = False
button_rect = pygame.Rect(WIDTH//2 - 100, HEIGHT//2 - 30, 200, 60)
next_button_rect = pygame.Rect(WIDTH//2 - 100, HEIGHT//2 + 30, 200, 60)
retry_button_rect = pygame.Rect(WIDTH//2 - 100, HEIGHT//2 + 100, 200, 60)

tolerance = 20

def reset_game():
    global level, total_fuel, fuel_positions, fuel_collected, score, rocket_cx, rocket_cy, rocket_velocity, rocket_launched, game_over, rocket_crashed, explosion
    level = 1
    total_fuel = level + 4
    fuel_positions = generate_fuel_positions()
    fuel_collected = 0
    score = 0
    rocket_cx, rocket_cy = 0, 0
    rocket_velocity = 0
    rocket_launched = False
    game_over = False
    rocket_crashed = False
    explosion = False

while running:
    screen.fill(BLACK)
    screen.blit(background_img, (0, 0))
    origin_x, origin_y = WIDTH // 2, HEIGHT // 2

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN:
            mx, my = event.pos
            if not start_game and button_rect.collidepoint(mx, my):
                start_game = True
            elif rocket_crashed and retry_button_rect.collidepoint(mx, my):
                reset_game()
            elif rocket_launched and next_button_rect.collidepoint(mx, my):            
                total_fuel = level + 4
                fuel_positions = generate_fuel_positions()
                fuel_collected = 0
                rocket_cx, rocket_cy = 0, 0
                rocket_velocity = 0
                rocket_launched = False
                game_over = False
                rocket_crashed = False
                explosion = False
            else:
                clicked_x, clicked_y = screen_to_cartesian(mx, my, origin_x, origin_y)
                for fuel_x, fuel_y in fuel_positions[:]:
                    fx, fy = cartesian_to_screen(fuel_x, fuel_y, origin_x, origin_y)
                    if abs(mx - fx) <= tolerance and abs(my - fy) <= tolerance:
                        fuel_positions.remove((fuel_x, fuel_y))
                        fuel_collected += 1
                        score += 10
                        break

    if not start_game:
        pygame.draw.rect(screen, BLUE, button_rect)
        text_start = large_font.render("START", True, WHITE)
        screen.blit(text_start, (button_rect.x + 50, button_rect.y + 10))
    else:
        # Draw Cartesian grid
        for x in range(-WIDTH // grid_size // 2, WIDTH // grid_size // 2 + 1):
            screen_x = origin_x + x * grid_size
            pygame.draw.line(screen, WHITE, (screen_x, 0), (screen_x, HEIGHT), 1)
            coord_text = small_font_grid.render(str(x), True, BLACK)
            screen.blit(coord_text, (screen_x - 5, origin_y + 5))

        for y in range(-HEIGHT // grid_size // 2, HEIGHT // grid_size // 2 + 1):
            screen_y = origin_y - y * grid_size
            pygame.draw.line(screen, WHITE, (0, screen_y), (WIDTH, screen_y), 1)
            coord_text = small_font_grid.render(str(y), True, BLACK)
            screen.blit(coord_text, (origin_x + 5, screen_y - 10))

        pygame.draw.line(screen, RED, (origin_x, 0), (origin_x, HEIGHT), 2)
        pygame.draw.line(screen, RED, (0, origin_y), (WIDTH, origin_y), 2)

        for fuel_x, fuel_y in fuel_positions:
            fx, fy = cartesian_to_screen(fuel_x, fuel_y, origin_x, origin_y)
            screen.blit(fuel_img, (fx - 20, fy - 20))
            fuel_text = small_font.render(f"({fuel_x}, {fuel_y})", True, BLACK)
            screen.blit(fuel_text, (fx - 15, fy - 40))

        if falling and not rocket_launched:
            rocket_velocity = -0.01
        elif rocket_launched:
            rocket_velocity = 0.05
        else:
            rocket_velocity = 0

        rocket_cy += rocket_velocity
        rocket_x, rocket_y = cartesian_to_screen(rocket_cx, rocket_cy, origin_x, origin_y)
        screen.blit(rocket_img, (rocket_x - rocket_img.get_width() // 2, rocket_y - rocket_img.get_height() // 2))

        if rocket_y > HEIGHT - 50:
            game_over = True
            if fuel_collected < total_fuel:
                rocket_crashed = True
                explosion = True
            else:
                rocket_launched = True
                level += 1
                total_fuel = level + 4
                fuel_positions = generate_fuel_positions()
                fuel_collected = 0
                rocket_cx, rocket_cy = 0, 0
                game_over = False
                rocket_crashed = False
                explosion = False
                rocket_launched = True


        if explosion:
            explosion_x = rocket_x - explosion_img.get_width() // 2
            explosion_y = rocket_y - explosion_img.get_height() + rocket_img.get_height() //2  # Adjust vertical position
            screen.blit(explosion_img, (explosion_x, explosion_y))


        message = "Rocket Crashed! Game over" if rocket_crashed else ("You got all the fuels! The rocket can safely launched!" if rocket_launched else "")
        if message:
            text_game_over = small_font.render(message, True, RED if rocket_crashed else GREEN)
            screen.blit(text_game_over, (WIDTH // 2 - text_game_over.get_width() // 2, 10))

        if rocket_crashed:
            pygame.draw.rect(screen, ORANGE, retry_button_rect)
            text_retry = large_font.render("Retry", True, WHITE)
            screen.blit(text_retry, (retry_button_rect.x + 70, retry_button_rect.y + 10))
        elif rocket_launched:
            pygame.draw.rect(screen, LIME_GREEN, next_button_rect)
            text_next = large_font.render("Next", True, WHITE)
            screen.blit(text_next, (next_button_rect.x + 70, next_button_rect.y + 10))

    text_score = font.render(f"Score: {score}", True, BLACK)
    text_fuel = font.render(f"Fuel: {fuel_collected}/{total_fuel}", True, BLACK)
    text_level = font.render(f"Level: {level}", True, BLACK)
    screen.blit(text_score, (10, 10))
    screen.blit(text_fuel, (10, 50))
    screen.blit(text_level, (10, 90))

    pygame.display.update()
    clock.tick(60)

pygame.quit()