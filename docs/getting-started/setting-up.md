# Setting Up Your Project

## Prerequisites

Before setting up a Python project, ensure you have Python installed on your system. If not, please refer to the [Installing Python](./installing.md) guide.

## Step-by-Step Guide

### 1. Create a Project Directory

First, create a directory for your project. This will help keep your project files organized.
```bash
mkdir my_python_project
cd my_python_project
```

### 2. Create a Virtual Environment (Recommended)

It's highly recommended to create a virtual environment for your project. This isolates your project's dependencies from other projects and the system-wide Python installation.
```bash
python3 -m venv venv
```

### 3. Activate the Virtual Environment

Activate the virtual environment to use it.
- Windows
    ```bash
    venv\Scripts\activate
    ```

- MacOS/Linux
    ```bash
    source venv/bin/activate
    ```

Your terminal prompt should now show the name of the virtual environment (e.g., `(venv) $`).

### 4. Install Dependencies

Use `pip` to install the dependencies for your project. For example, if your project uses the `requests` library:
```bash
pip install requests
```

You can specify a list of dependencies in a `requirements.txt` file and install them using:
```bash
pip install -r requirements.txt
```

To create a `requirements.txt` file with your current dependencies:
```bash
pip freeze > requirements.txt
```

### 5. Create Your Project Files

Now you can start creating your Python project files, such as `main.py`, `utils.py`, etc.

### 6. Run Your Project

Run your Python script using the `python3` or `python` command:
```bash
python3 main.py
```

## Deactivating the Virtual Environment

When you're done working on your project, you can deactivate the virtual environment:
```bash
deactivate
```

Your terminal prompt will return to normal.