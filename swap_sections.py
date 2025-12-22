
import os

file_path = 'd:/The-Qatar-Talks-main-new-test1/The-Qatar-Talks-main/index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Block A: Contestants
# Start Line 67 (Index 66)
# End Line 164 (Index 163) (Inclusive)
# Python slice [66:164]
block_a_start = 66
block_a_end = 164

# Block B: Finalists
# Start Line 167 (Index 166)
# End Line 370 (Index 369) (Inclusive)
# Python slice [166:370]
block_b_start = 166
block_b_end = 370

# Middle (Separator)
# Lines 165, 166 (Indices 164, 165)
# Python slice [164:166]

print(f"Total lines: {len(lines)}")
print(f"Block A: {lines[block_a_start].strip()} to {lines[block_a_end-1].strip()}")
print(f"Block B: {lines[block_b_start].strip()} to {lines[block_b_end-1].strip()}")

part1 = lines[:block_a_start]
part_a = lines[block_a_start:block_a_end]
middle = lines[block_a_end:block_b_start]
part_b = lines[block_b_start:block_b_end]
part3 = lines[block_b_end:]

# New Order: Part1 + PartB + Middle + PartA + Part3
new_lines = part1 + part_b + middle + part_a + part3

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Swap complete.")
