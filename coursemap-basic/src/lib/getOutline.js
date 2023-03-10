export let example = [
  {
    name: "Logic and Proofs",
    childs: [
      "Introduction to logic",
      "Truth values",
      "Tautologies, contradictions and contingent propositions",
      "Logical equivalence and logical implication",
      "Introduction to proofs",
      "Proofs by contraposition and contradiction",
      "Counterexamples and proof by cases",
      "Proof by construction",
      "Language in proofs",
      "Predicates and quantifiers",
      "*Tautologies and implications in predicate logic",
    ],
    definition: {
      simple:
        "\n\nLogic is a systematic way of reasoning and drawing conclusions that follow from certain assumptions or premises. It involves using logical principles, such as deduction and induction, to evaluate arguments and statements and determine whether they are valid or invalid.\n\nProofs, on the other hand, are arguments or demonstrations that establish the truth or validity of a particular statement or claim. They rely on logical reasoning and evidence to support a conclusion, and can take many forms, such as mathematical proofs, scientific experiments, or legal arguments. A proof may involve a series of steps or premises that lead to a logical conclusion, or it may rely on a single piece of evidence or observation.",
    },
  },
  {
    name: "Integers and Divisibility",
    childs: [
      "Definitions",
      "Basic properties of integers",
      "Finding all factors of a positive integer",
      "Common divisors",
      "The Euclidean algorithm",
      "Congruences and modular arithmetic",
    ],
    definition: {
      simple:
        "\n\nIntegers are whole numbers, both positive and negative, including zero. They do not include fractions or decimals. For example, -4, -3, -2, -1, 0, 1, 2, 3, and 4 are all integers.\n\nDivisibility is the property of being able to divide a number evenly by another number without leaving a remainder. For example, 15 is divisible by 3 because 3 goes into 15 exactly 5 times with no remainder. 15 is not divisible by 7 because 7 goes into 15 only twice, with a remainder of 1.",
    },
  },
  {
    name: "Induction and Recursion",
    childs: [
      "Induction",
      "The second principle of mathematical induction",
      "Loop invariant theorem",
      "Recursive definitions",
      "Recurrence relations",
      "Solving recurrence relations",
      "Solving linear homogeneous recurrence relations",
    ],
    definition: {
      simple:
        "\n\nInduction is a method of mathematical proof that involves proving a statement for a base case, and then using that as a way to prove the statement for an arbitrarily large number of cases. Induction typically involves a proof by contradiction or by constructive induction, and is often used to prove theorems in discrete mathematics.\n\nRecursion is a method of defining a function or sequence in terms of itself. Recursive functions typically have one or more base cases that define the function for simple inputs, and then a general case that defines the function in terms of simpler or smaller inputs. Recursion is often used to define functions in computer science and algorithms, and is a fundamental concept in programming.",
    },
  },
  {
    name: "Relations and Functions",
    childs: [
      "Ordered pairs, Cartesian products, power set",
      "Relations",
      "Equivalence relations",
      "Partial orderings",
      "Functions",
      "Equality of functions",
      "Function composition",
      "Partial functions",
      "Types of functions",
    ],
    definition: {
      simple:
        "\n\nRelations: A relation is a set of ordered pairs, where the first component is the input and the second component is the output. It describes the association between the elements of two sets.\n\nFunctions: A function is a specific type of relation, where each input has a unique output. It is a set of ordered pairs where no two different ordered pairs have the same first component. Functions can be represented using equations, tables, graphs, or verbal descriptions.",
    },
  },
  {
    name: "Graphs",
    childs: [
      "Introduction to graphs",
      "Basic terminology",
      "Representing graphs",
      "Connectivity, paths and circuits",
      "Isomorphism of graphs",
      "Euler circuits and walks",
      "Hamilton paths and cycles",
    ],
    definition: {
      simple:
        "\n\nGraphs are diagrams that represent a collection of data points using lines, bars, dots, or other visual elements to show trends, patterns, and relationships between variables. They are commonly used to display information in various fields such as mathematics, statistics, economics, and the natural sciences. Graphs can aid in the interpretation and analysis of data by making complex information more accessible and easier to understand.",
    },
  },
  {
    name: "Enumeration",
    childs: [
      "Introduction",
      "Arrangement problems",
      "Selections",
      "Selections with repetitions allowed",
      "Some properties of binomial coefficients",
      "The inclusion/exclusion principle",
      "The pigeonhole principle",
      "Trickier pigeonhole applications",
    ],
    definition: {
      simple:
        "\n\nEnumeration refers to the process of listing items in a structured and organized manner. It involves systematically identifying and counting or categorizing items, people, or things based on certain criteria or characteristics. Enumeration plays an important role in various fields, including data collection, surveying, and research, where it helps to provide information or insights into specific topics or issues.",
    },
  },
  {
    name: "Deterministic Finite Automata",
    childs: [
      "Alphabet and strings",
      "Operations on languages",
      "Designing finite automata",
      "Automata for operations on languages",
    ],
    definition: {
      simple:
        "\n\nDeterministic Finite Automata (DFA) is a mathematical model for defining a finite state machine with a finite set of input symbols, a finite set of states, a start state, and a set of accept states. It is called deterministic because, for each input symbol, there is only one possible state transition, which is determined by the current state and the current input symbol. This model is used in computer science for various applications, including string matching and pattern recognition.",
    },
  },
  {
    name: "Codes",
    childs: [
      "Prefix codes and optimal binary trees",
      "Introduction to error-correcting codes",
      "RSA public-key cryptosystem",
    ],
    definition: {
      simple:
        "\n\nCodes are sets of symbols, letters, numbers, or other characters that represent information in a condensed or secret form. They are used in a variety of contexts, including computer programming, cryptography, and communication protocols, to transmit messages in a more efficient or secure manner. Codes can include ciphers, algorithms, and other techniques that transform information into a format that can be easily transmitted or stored.",
    },
  },
];
