# Installing Python

## Prerequisites

Before installing Python, ensure you have a stable internet connection and administrative privileges on your computer.

## Installation Guide

### Windows

1. Download the installer from the python website [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)
2. Run the installer and follow the onscreen instructions
3. Verify that it installed by going to your terminal and typing in:
    ```bash
    python --version
    ```

### MacOS
1. Download the installer from the python website [https://www.python.org/downloads/macos/](https://www.python.org/downloads/macos/)
2. Run the installer and follow the onscreen instructions
3. Verify that it installed by going to your terminal and typing in:
    ```bash
    python3 --version
    ```

### Linux

1. Install with your package manager:
   - Debian/Ubuntu:
        ```bash
        sudo apt update
        sudo apt install python3 python3-pip
        ```

   - Fedora/CentOS/RHEL:
        ```bash
        sudo dnf install python3 python3-pip
        ```

   - Arch Linux:
       ```bash
       sudo pacman -S python python-pip
       ```
2. Verify that it installed by going to your terminal and typing in:
    ```bash
    python3 --version
    ```

## Post-Installation

After installing Python, it's recommended to update Pip with:
```bash
python3 -m pip install --upgrade pip
```