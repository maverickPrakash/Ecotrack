import subprocess

# Define the hping3 command
hping3_command = "hping3 -c 1000 -S -p 80 -d 120 -w 64 -s 3000-4000 146.190.242.155"

# Execute the hping3 command and capture its output
try:
    output = subprocess.check_output(hping3_command, shell=True, stderr=subprocess.STDOUT, text=True)
except subprocess.CalledProcessError as e:
    output = e.output

# Write command and output to task4.txt
with open("task4.txt", "w") as file:
    file.write("Command:\n")
    file.write(hping3_command + "\n\n")
    file.write("Output:\n")
    file.write(output)
