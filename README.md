# String Calculator Kata

This project implements the **String Calculator** Kata using **Test-Driven Development (TDD)** principles. The calculator adds numbers provided in a string format, supporting various delimiters and custom rules as defined in the kata description.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Example Usage](#example-usage)
- [Implementation Details](#implementation-details)
- [Commits and TDD Process](#commits-and-tdd-process)

## Project Overview

The goal of this project is to demonstrate the ability to follow TDD principles by building a simple string calculator. Each feature is developed iteratively, with tests written before the actual code implementation. The evolution of the project is tracked through Git commits to show the step-by-step progress.

## Features
- Add numbers from a string separated by commas or newlines.
- Support for custom delimiters.
- Throws an exception for negative numbers, listing all negatives.
- Handles an any amount of numbers.

## Getting Started

### Prerequisites
Make sure you have **Node.js** installed. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/string-calculator.git
    cd string-calculator

2. Install the dependencies:
    ```bash
    npm install

### Running Tests
To run the tests, simply use the following command:
    ```bash
    npm test
This will execute all the test cases in the project using Jest.

### Example Usage
Here are some examples of how the String Calculator works:

    Empty string:
    add(""); // Output: 0
    
    Single number:
    add("1"); // Output: 1
    
    Two numbers:
    add("1,2"); // Output: 3
    
    Multiple numbers:
    add("1,2,3"); // Output: 6
    
    New line as a delimiter:
    add("1\n2,3"); // Output: 6
    
    Custom delimiter:
    add("//;\n1;2"); // Output: 3
    
    Negative numbers throw an exception:
    add("1,-2,3"); // Throws: "negative numbers not allowed -2"
    

### Implementation Details
This project was developed using Node.js and the Jest testing framework, adhering strictly to TDD principles. Each feature was introduced by first writing tests and ensuring the code passes after implementation. The project was built incrementally, refactoring after each passing test.

Key Considerations:
- Edge Cases: The function handles cases like an empty string, single numbers, or negative inputs.
- Error Handling: Negative numbers result in an exception with a list of all negative numbers.

### Commits and TDD Process

The codebase has been developed following TDD with frequent commits to reflect the iterative development process. Each commit shows how the code evolves in small steps, starting from the simplest test case and gradually building towards more complex requirements.
