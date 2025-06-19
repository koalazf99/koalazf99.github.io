from PIL import Image

def resize_image(input_path, output_path, size):
    image = Image.open(input_path)
    resized_image = image.resize(size)
    resized_image.save(output_path)

input_file = "2025_profile.png"

# Resize to 192x192
output_file_192 = "android-chrome-192x192.png"
resize_image(input_file, output_file_192, (192, 192))
print(f"Image resized to {output_file_192}")

# Resize to 512x512
output_file_512 = "android-chrome-512x512.png"
resize_image(input_file, output_file_512, (512, 512))
print(f"Image resized to {output_file_512}")
