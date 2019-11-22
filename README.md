# My Branch Notes

* Ensure you have Node installed on your machine
* To start the app run "node app.js -f hands.txt"
    * 

# The Challenge

In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

**High Card:** Highest value card.

**One Pair:** Two cards of the same value.

**Two Pairs:** Two different pairs.

**Three of a Kind:** Three cards of the same value.

**Straight:** All cards are consecutive values.

**Flush:** All cards of the same suit.

**Full House:** Three of a kind and a pair.

**Four of a Kind:** Four cards of the same value.

**Straight Flush:** All cards are consecutive values of same suit.

**Royal Flush:** Ten, Jack, Queen, King, Ace, in same suit.

**The cards are valued in the order:** 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

>If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

Consider the following five hands dealt to two players:

Hand  | Player 1          | Player 2       | Winner
---   | ---               | ---            | ---
1     | 5H 5C 6S 7S KD    | 2C 3S 8S 8D TD | Player 2
2	  | 5D 8C 9S JS AC    | 2C 5C 7D 8S QH | Player 1
3	  | 2D 9C AS AH AC    | 3D 6D 7D TD QD | Player 2
4     | 4D 6S 9H QH QC    | 3D 6D 7H QD QS | Player 1
5     | 2H 2D 4C 4D 4S    | 3C 3D 3S 9S 9D | Player 1

The file in this repository **"hands.txt"**, contains one-thousand random hands dealt to two players. 

* Each line of the file contains ten cards (separated by a single space): 
    * the first five are Player 1's cards
    * the last five are Player 2's cards. 
* You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

**Challenge:** How many hands does Player 1 win?

# Rules

Your submission:

1. MUST be submitted by **11/22/2019**.

1. MUST be in the form of a console application

1. MUST be implemented one of the following languages: C# (.NET Core), JavaScript, Python, or Java

1. MUST be executable on Ubuntu 18.04+

1. MUST take the path to the hands.txt file as a parameter called "-f".
    > ```$ dotnet ./path/to/myapp.dll -f /path/to/hands.txt```
    
    > ```$ node ./path/to/myapp.js -f /path/to/hands.txt```

    > ```$ python3 ./path/to/myapp.py -f /path/to/hands.txt```

    > ```$ java ./path/to/myapp -f /path/to/hands.txt```

1. MUST be able to run other, randomized sets of hands (don't just generate a static precalculated table of results.)

1. MUST be in the spirit of competition. Although creativity is encouraged, finding ways to win without appreciating the spirit of the competition is not.

# How to Participate

1. Fork this repository and create a new branch on your forked copy with the prefix "solution" followed by your name, all lowercase with dashes.
    > *ex.* "solution\douglas-linsmeyer"

1. Send a message to Doug Linsmeyer with a link to your new branch in your forked repository. We'll create a new branch on this repository with the same name as your branch in your fork.

1. Create your solution to the challenge and commit the work to your fork & branch.

1. Submit a Pull Request from your fork and branch to the origin branch of the same name.

# Scoring Criteria

* Creativity of solution approach
* Efficiency of the solution (fastest execution time)
* Presence and comprehensiveness of tests
* Cleanliness of the solution
    * Naming (variables, functions, etc...)
    * Organization
    * Formatting (no standard, just be deliberate)
