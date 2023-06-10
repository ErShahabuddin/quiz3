// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "CUP : LIP :: BIRD : ?",
    answer: "C. BEAK",
    options: [
      "A. GRASS",
      "B. FOREST",
      "C. BEAK",
      "D. BUSH​"
    ]
  },
    {
    numb: 2,
    question: "Flow : River :: Stagnant : ?",
    answer: "Pool",
    options: [
      "Rain",
      "Stream",
      "Pool",
      "Canal"
    ]
  },
    {
    numb: 3,
    question: "Paw : Cat :: Hoof : ?",
    answer: "D) Horse",
    options: [
      "A) Donkey",
      "B) Lion",
      "C) Elephant",
      "D) Horse"
    ]
  },
    {
    numb: 4,
    question: "Ornithologist : Bird :: Archaeologist : ?",
    answer: "c)Archaeology",
    options: [
      "a)Islands",
      "b)Mediators",
      "c)Archaeology",
      "d)Aquatic"
    ]
  },
    {
    numb: 5,
    question: "Find the wrong number in the sequence 125, 127, 130, 135, 142, 153, 165",
    answer: "(d) 165",
    options: [
      "(a) 130",
      "(b) 142",
      " (c) 153",
      "(d) 165"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
  
  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
  
     {
    numb: 6,
     question: "Have a look at the series: 4, 7, 5, 8, 6, 9, ….., ... What number should come next?",
     answer: "7",
     options: [
      "9",
       "7",
       "10",
       "13"
     ]
  },
  
    {
     numb: 7,
     question: "Have a look at the series:26,24,20,18,14... What number should come next?",
     answer: "12",
     options: [
       "10",
       "12",
       "13",
       "16"
     ]
   },

   {
    numb: 8,
    question: "Vincent has a paper route. Each morning, he delivers 37 newspapers to customers in his neighborhood. It takes Vincent 50 minutes to deliver all the papers. If Vincent is sick or has other plans, his friend Thomas, who lives on the same street, will sometimes deliver the papers for him. ",
    answer: "It is dark outside when Vincent begins his deliveries.",
    options: [
      "Vincent and Thomas live in the same neighborhood",
      "It takes Thomas more than 50 minutes to deliver the papers.",
      "It is dark outside when Vincent begins his deliveries.",
      "Thomas would like to have his own paper route"
    ]
  },

  {
    numb: 9,
    question: "Find the statement that must be true according to the given information. The Pacific yew is an evergreen tree that grows in the Pacific Northwest. The Pacific yew has a fleshy, poisonous fruit. Recently, taxol, a substance found in the bark of the Pacific yew, was discovered to be a promising new anticancer drug.",
    answer: "c)People should not eat the fruit of the Pacific yew",
    options: [
      "a)Taxol is poisonous when taken by healthy people.",
      "b)Taxol has cured people from various diseases.",
      "c)People should not eat the fruit of the Pacific yew",
      "d)The Pacific yew was considered worthless until taxol was discovered."
    ]
  },

  {
    numb: 10,
    question: "Erin is twelve years old. For three years, she has been asking her parents for a dog. Her parents have told her that they believe a dog would not be happy in an apartment, but they have given her permission to have a bird. Erin has not yet decided what kind of bird she would like to have.",
    answer: "C. Erin and her parents live in an apartment.",
    options: [
      "A. Erin's parents like birds better than they like dogs.",
      "B. Erin does not like birds.",
      "C. Erin and her parents live in an apartment.",
      "D. Erin and her parents would like to move."
    ]
  },
  {
    numb: 11,
    question: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?",
    answer: "1/8",
    options: [
      "1/3",
      "1/8",
      "2/8",
      "1/16"
    ]
  },
  {
    numb: 12,
    question: "Statement : A large number of people in ward X of the city are diagnosed to be suffering from a fatal malaria type. Courses of Action:I. The city municipal authority should take immediate steps to carry out extensive fumigation in ward X.II. The people in the area should be advised to take steps to avoid mosquito bites.",
    answer: "Both I and II follow",
    options: [
      "Only I follow",
      "Only II follow",
      "Either I or II follow",
      "Both I and II follow"
    ]
  },
  {
    numb: 13,
    question: "Statement: Severe drought is reported to have set in several parts of the country.Courses of Action: I. The government should immediately make arrangement for providing financial assistance to those affected. II. Food, water, and fodder should immediately be sent to all these areas to save the people and cattle.",
    answer: "Only II folloe",
    options: [
      "Only I follow",
      "Only II folloe",
      "Either I or II follow",
      "Both I and II follow"
    ]
  },
  {
    numb: 14,
    question: "The number of ways to cut a six sided convex polygon whose vertices are labeled into four triangles using diagonal lines that do not cross is",
    answer: "14",
    options: [
      "13",
      "14",
      "12",
      "11"
    ]
  },
  {
    numb: 15,
    question: "The number of ways in which a team of eleven players can be selected from 22 players, always including 2 of them and excluding 4 of them is",
    answer: "16c7",
    options: [
      "16c11",
      "16c7",
      "16c13",
      "16c9"
    ]
  },
  {
    numb: 16,
    question: "The maximum degree of any vertex in a simple graph with n vertices is",
    answer: "n-1",
    options: [
      "n-1",
      "n+1",
      "n",
      "n+2"
    ]
  },
  {
    numb: 17,
    question: "Determinant of the following matrix is [5 3 2;1 2 6;3 5 10",
    answer: "-28",
    options: [
      "-76",
      "-28",
      "+28",
      "+72"
    ]
  },
  {
    numb: 18,
    question: "The greatest and the least value of f(x)=x^4-8x^3+22x^2-24x+1 in (0, 2) are",
    answer: "1,-8",
    options: [
      "0,8",
      "0,-8",
      "1,8",
      "1,-8"
    ]
  },
  {
    numb: 19,
    question: "Consider the system of simultaneous equation, x + 2y + z = 6 2x + y + 2z = 6 x + y + z = 5 The system has,",
    answer: "2. no solution",
    options: [
      "1. infinite number of solutions",
      "2. no solution",
      "3. unique solution ",
      "4. exactly two solutions"
    ]
  },
  {
    numb: 20,
    question: "In which of the following method proper choice of initial value is very important?",
    answer: "(B) Newton-Raphson method",
    options: [
      "(A) Bisection method",
      "(B) Newton-Raphson method",
      "(C) False position method",
      "(D) None of these​"
    ]
  },
  {
    numb: 21,
    question: "if ∆f(x)=f(x-h)-f(x) then constant k,∆k equal​",
    answer: "(b) 0",
    options: [
      "(a) 1",
      "(b) 0",
      "(c) f(k)-f(0)",
      "(d) f(x-k)-f(x)"
    ]
  },
  {
    numb: 22,
    question: "2x^3-15x^2+36x+10 find minimum and maximum",
    answer: "x=2 and x=3",
    options: [
      "x=3 and x=2",
      "x= and x=3",
      "x=2 and x=3",
      "x=3 and x=4"
    ]
  },
  {
    numb: 23,
    question: "If A and B are square matrices of size n × n, then which of the following is not true?",
    answer: "det (A + B) = det(A) + det(B)",
    options: [
      "det (AB) = det(A)det(B)",
      "det (kA) = k^n  det(A)",
      "det (A + B) = det(A) + det(B)",
      "det(A^t)=1/det(a^-1)"
    ]
  },
  {
    numb: 24,
    question: "The minimum value of |x^2-5x+2| is",
    answer: "-5",
    options: [
      "-5",
      "0",
      "-1",
      "-2"
    ]
  },
  {
    numb: 25,
    question: "A box contains 10 screws, 3 of which are defective. Two screws are drawn at random with replacement. The probability that none of the two screws will be defective",
    answer: "49%",
    options: [
      "100%",
      "50%",
      "49%",
      "None of these"
    ]
  },
  {
    numb: 26,
    question: "The following marks were obtained by the students in a test : 81,72,90,90,86,85,92,70,71,83,89,95,85,79,62 The range of the marks is",
    answer: "33",
    options: [
      "9",
      "17",
      "27",
      "33"
    ]
  },
  {
    numb: 27,
    question: "Which of the following logic expretion is incorrect",
    answer: "1 Exor 1 Exor 0 = 1",
    options: [
      "1 Exor 1 Exor 0 = 1",
      "1 Exor 0 = 1",
      "1 Exor 1 = 0",
      "1 Exor 1 Exor 1 = 1"
    ]
  },
  {
    numb: 28,
    question: "In which of the following adder circuits, the carry look ripple delay is eliminated?",
    answer: "Paraller adder",
    options: [
      "Half adder",
      "Full adder",
      "Paraller adder",
      "Carry-look ahead adder"
    ]
  },
  {
    numb: 29,
    question: "The output of a sequential circuit depends on",
    answer: "both present and past inputs",
    options: [
      "present inputs",
      "past outputs",
      "both present and past inputs",
      "past inputs"
    ]
  },
  {
    numb: 30,
    question: "In a ripple counter using edge triggered flip-flops, the pulse input is applied to the",
    answer: "clock input of one flip-flop",
    options: [
      "clock input of all flip-flops",
      "clock input of one flip-flop",
      "J and K inputs of all flip-flops",
      "J and K inputs of one flip-flops"
    ]
  },
  {
    numb: 31,
    question: "A decimal number has 30 digits. Approximately, how many digits would the binary representation have?",
    answer: "120",
    options: [
      "30",
      "60",
      "90",
      "120"
    ]
  },

  
  {
    numb: 32,
    question: "The result of substration FD16-8816 is (16=base)",
    answer: "7516",
    options: [
      "7516",
      "6516",
      "5E16",
      "1016"
    ]
  },

  {
    numb: 33,
    question: "How many RAM chips of size 512K x 1 bit are required to build 1 M Byte of memory.",
    answer: "32",
    options: [
      "8",
      "10",
      "24",
      "32"
    ]
  },
  {
    numb: 34,
    question: "When we move from outermost track to innermost track in a magnetic disc , density ( bits per linear inch)",
    answer: "increase",
    options: [
      "increase",
      "decrease",
      "remain same",
      "A or B"
    ]
  },
  {
    numb: 35,
    question: "A certain processor supports only the immediate and the direct addressing modes. Which of the following programming language features cannot be implemented on this processor?",
    answer: "Recursive procedure with local variable",
    options: [
      "Pointer",
      "Array",
      "Record",
      "Recursive procedure with local variable"
    ]
  },
  {
    numb: 36,
    question: "The disadvantage of dynamic RAM over static RAM is?",
    answer: "Need to refresh the capicator change every once in two milliseccond",
    options: [
      "Higher power consumption",
      "Variable speed",
      "Need to refresh the capicator change every once in two milliseccond",
      "Higher but density"
    ]
  },
  {
    numb: 37,
    question: "We want to round off x a Float to an Int value. The correct way to do so would be",
    answer: "1 Y = ( int ) ( x + 0.5 ) ;",
    options: [
      "1 Y = ( int ) ( x + 0.5 ) ;",
      "2 Y = int ( x + 0.5) ;",
      "3 Y = ( int ) x + 0.5;",
      "4 Y = ( int ) ( ( int ) x + 0.5 )"
    ]
  },
  {
    numb: 38,
    question: "which is the following sorting algorithm does not have a worst case running time of 0(n²)?",
    answer: "Merge sort",
    options: [
      "Insertion sort",
      "Merge sort",
      "Quick sort",
      "Bubble sort"
    ]
  },
  {
    numb: 39,
    question: "Prior to using a pointer variable",
    answer: "C.It should be both declared and initialized.",
    options: [
      "A.It should be declared.",
      "B.It should be initialized.",
      "C.It should be both declared and initialized.",
      "D.None of these."
    ]
  },
  {
    numb: 40,
    question: "What error would the following code give on compilation? f(int a, int b){int a;a=20;return a;}",
    answer: "c)Redeclaration of a",
    options: [
      "a)Missing parentheses in return statement",
      "b)The function should be defined as int f(int a, int b)",
      "c)Redeclaration of a",
      "d)None of the above"
    ]
  },
  {
    numb: 41,
    question: "Output of the following loop is for(putchar('c'); putchar('a');putchar('r')) putchar('t');",
    answer: "catratratrat...",
    options: [
      "a syntex error",
      "cartrt",
      "catrat",
      "catratratrat..."
    ]
  },
  {
    numb: 42,
    question: "If space occupied by two strings s1 and s2 in 'C' are respectively m and n, then space occupied by string obtained by concatenating s1 and s2 is always",
    answer: "Less than m+n",
    options: [
      "Less than m+n",
      "Equal to m+n",
      "Greater than m+n",
      "Greater than M*n"
    ]
  },
  {
    numb: 43,
    question: "A Hash function f is defined as f(key) = key mod 7. With linear probing, while inserting the keys 37, 38, 72, 48, 98, 11, 56 into a table indexed from 0, in which location the key 11 will be stored in the location",
    answer: "5",
    options: [
      "3",
      "4",
      "5",
      "6"
    ]
  },
  {
    numb: 44,
    question: "Traversing a binary tree first root and then left and right subtrees called ___traversal.",
    answer: "Preorder",
    options: [
      "Inorder",
      "Preorder",
      "Podtorder",
      "None of these"
    ]
  },
  {
    numb: 45,
    question: "If there is in NP-Complete language L whose complement is in NP, then complement of any language in NP is in",
    answer: "B.NP",
    options: [
      "A.P",
      "B.NP",
      "C.both A and B",
      "None of these"
    ]
  },
  {
    numb: 46,
    question: "A has table has space for 100 records. What is the probability of collision before the table is 10% full?",
    answer: "0.45",
    options: [
      "0.45",
      "0.5",
      "0.3",
      "0.34"
    ]
  },
  {
    numb: 47,
    question: "A polynomial p(x) is such that p(0)=5 ,p(1)=4 ,p(2)=9,p(3)=20 ,the minimum degree it can have",
    answer: "2",
    options: [
      "1",
      "2",
      "3",
      "4"
    ]
  },
  {
    numb: 48,
    question: "Time complexity of an algorithm T(n), where n is the input size is given byT(n) = T( n - 1 )+ 1/n, if n> 1= 1, otherwiseThe order of this algorithm is __",
    answer: "log n",
    options: [
      "log n",
      "n^2",
      "n",
      "n*n"
    ]
  },
  {
    numb: 49,
    question: "Regarding the power of recognition of languages, which of the following statement is false?",
    answer: "(B) Non-deterministic pushdown automata is equivalent to deterministic pushdown automata.",
    options: [
      "(A) The non-deterministic finite state automata are equivalent to deterministic finite state automata.",
      "(B) Non-deterministic pushdown automata is equivalent to deterministic pushdown automata.",
      "(C) Non-deterministic Turing machines are equivalent to deterministic Turing machines.",
      "(D) Multi-tape Turing machines are equivalent to Single-tape Turing machines."
    ]
  },
  {
    numb: 50,
    question: "A linker is given object modules for a set of programs that were complied separately. What information need not be included in the object module?",
    answer: "Name and locations of all external symbol denied in the oblect module",
    options: [
      "Object code10",
      "Relocation bits",
      "Absolute addresses of internal symbol",
      "Name and locations of all external symbol denied in the oblect module"
    ]
  },
  {
    numb: 51,
    question: "Which of the following languages are not regular?A. L = {(01)n 0k | n > k, k >= 0}B. L = {cn bk an + k | n >= 0, k >= 0}C. L = {0n 1k | n ≠ k}",
    answer: "A,B and C",
    options: [
      "A and B only",
      "A and C only",
      "B and C only",
      "A,B and C"
    ]
  },
  {
    numb: 52,
    question: " Dijkstra’s Algorithm is used to solve _____________ problems",
    answer: "b) Single source shortest path",
    options: [
      "a) All pair shortest path",
      "b) Single source shortest path",
      "c) Network flow",
      "d) Sorting"
    ]
  },
  {
    numb: 53,
    question: "Which of the following is the most commonly used data structure for implementing Dijkstra’s Algorithm?",
    answer: "d) Min priority queue",
    options: [
      "a) Max priority queue",
      "b) Stack",
      "c) Circular queue",
      "d) Min priority queue"
    ]
  },
  {
    numb: 54,
    question: "What is the time complexity of Dijikstra’s algorithm?",
    answer: "c) O(N^2)",
    options: [
      "a) O(N)",
      "b) O(N^3)",
      "c) O(N^2)",
      "d) O(logN)"
    ]
  },
  {
    numb: 55,
    question: "How many priority queue operations are involved in Dijkstra’s Algorithm?",
    answer: "3",
    options: [
      "1",
      "3",
      "2",
      "4"
    ]
  },
  {
    numb: 56,
    question: "How many times the insert and extract min operations are invoked per vertex?",
    answer: "1",
    options: [
      "1",
      "2",
      "3",
      "0"
    ]
  },
  {
    numb: 57,
    question: "The maximum number of times the decrease key operation performed in Dijkstra’s algorithm will be equal to ___________",
    answer: "b) Total number of edges",
    options: [
      "a) Total number of vertices",
      "b) Total number of edges",
      "c) Number of vertices – 1",
      "d) Number of edges – 1"
    ]
  },
  {
    numb: 58,
    question: " What is running time of Dijkstra’s algorithm using Binary min- heap method?",
    answer: "d) O(ElogV)",
    options: [
      "a) O(V)",
      "b) O(VlogV)",
      "c) O(E)",
      "d) O(ElogV)"
    ]
  },
  {
    numb: 59,
    question: "The running time of Bellmann Ford algorithm is lower than that of Dijkstra’s Algorithm.",
    answer: "b) False",
    options: [
      "a) True",
      "b) False",
      "Na",
      "Na"
    ]
  },
  {
    numb: 60,
    question: " Dijkstra’s Algorithm run on a weighted, directed graph G={V,E} with non-negative weight function w and source s, terminates with d[u]=delta(s,u) for all vertices u in V.",
    answer: "a) True",
    options: [
      "a) True",
      "b) False",
      "Na",
      "Na"
    ]
  },
  {
    numb: 61,
    question: "Given pseudo code of Dijkstra’s Algorithm.S=0 Q=V[G]While Q != 0 Do u=extract-min(Q) S=S union {u} For each vertex v in adj[u] Do relax(u,v,w)  What happens when “While Q != 0” is changed to “while Q>1”?",
    answer: "b) While loop gets executed for v-1 times",
    options: [
      "a) While loop gets executed for v times",
      "b) While loop gets executed for v-1 times",
      "c) While loop gets executed only once",
      "d) While loop does not get executed"
    ]
  },

  
  {
    numb: 62,
    question: "Dijkstra’s Algorithm is the prime example for ___________",
    answer: "a) Greedy algorithm",
    options: [
      "a) Greedy algorithm",
      "b) Branch and bound",
      "c) Back tracking",
      "d) Dynamic programming"
    ]
  },

  {
    numb: 63,
    question: "The Bellmann Ford algorithm returns _______ value.",
    answer: "a) Boolean",
    options: [
      "a) Boolean",
      "b) Integer",
      "c) String",
      "d) Double"
    ]
  },
  {
    numb: 64,
    question: " Merge sort uses which of the following technique to implement sorting?",
    answer: "c) divide and conquer",
    options: [
      "a) backtracking",
      "b) greedy algorithm",
      "c) divide and conquer",
      "d) dynamic programming"
    ]
  },
  {
    numb: 65,
    question: "What is the average case time complexity of merge sort?",
    answer: "a) O(n log n)",
    options: [
      "a) O(n log n)",
      "b) O(n^2)",
      "c) O(n^2 log n)",
      "d) O(n log n^2)"
    ]
  },
  {
    numb: 66,
    question: " What is the auxiliary space complexity of merge sort?",
    answer: "c) O(n)",
    options: [
      "a) O(1)",
      "b) O(log n)",
      "c) O(n)",
      "d) O(n log n)"
    ]
  },
  {
    numb: 67,
    question: "Merge sort can be implemented using O(1) auxiliary space.",
    answer: "a) true",
    options: [
      "a) true",
      "b) false",
      "Na",
      "Na"
    ]
  },
  {
    numb: 68,
    question: " What is the worst case time complexity of merge sort?",
    answer: "a) O(n log n)",
    options: [
      "a) O(n log n)",
      "b) O(n^2)",
      "c) O(n^2 log n)",
      "d) O(n log n^2)"
    ]
  },
  {
    numb: 69,
    question: "Which of the following method is used for sorting in merge sort?",
    answer: "a) merging",
    options: [
      "a) merging",
      "b) partitioning",
      "c) selection",
      "d) exchanging"
    ]
  },
  {
    numb: 70,
    question: "What will be the best case time complexity of merge sort?",
    answer: "a) O(n log n)",
    options: [
      "a) O(n log n)",
      "b) O(n^2)",
      "c) O(n^2 log n)",
      "d) O(n log n^2)"
    ]
  },
  {
    numb: 71,
    question: "Which of the following is not a variant of merge sort?",
    answer: "d) linear merge sort",
    options: [
      "a) in-place merge sort",
      "b) bottom up merge sort",
      "c) top down merge sort",
      "d) linear merge sort"
    ]
  },
  {
    numb: 72,
    question: "Choose the incorrect statement about merge sort from the following?",
    answer: "b) it is an adaptive algorithm",
    options: [
      "a) it is a comparison based sort",
      "b) it is an adaptive algorithm",
      "c) it is not an in place algorithm",
      "d) it is stable algorithm"
    ]
  },
  {
    numb: 73,
    question: "Which of the following is not in place sorting algorithm by default?",
    answer: "a) merge sort",
    options: [
      "a) merge sort",
      "b) quick sort",
      "c) heap sort",
      "d) insertion sort"
    ]
  },
  {
    numb: 74,
    question: "Which of the following is not a stable sorting algorithm?",
    answer: "a) Quick sort",
    options: [
      "a) Quick sort",
      "b) Cocktail sort",
      "c) Bubble sort",
      "d) Merge sort"
    ]
  },
  {
    numb: 75,
    question: "Which of the following stable sorting algorithm takes the least time when applied to an almost sorted array?",
    answer: "d) Merge sort",
    options: [
      "a) Quick sort",
      "b) Insertion sort",
      "c) Selection sort",
      "d) Merge sort"
    ]
  },
  {
    numb: 76,
    question: "Merge sort is preferred for arrays over linked lists.",
    answer: "b) false",
    options: [
      "a) true",
      "b) false",
      "Na",
      "NA"
    ]
  },
  {
    numb: 77,
    question: "Which of the following sorting algorithm makes use of merge sort?",
    answer: "a) tim sort",
    options: [
      "a) tim sort",
      "b) intro sort",
      "c) bogo sort",
      "d) quick sort"
    ]
  },
  {
    numb: 78,
    question: " Which of the following sorting algorithm does not use recursion?",
    answer: "d) bottom up merge sort",
    options: [
      "a) quick sort",
      "b) merge sort",
      "c) heap sort",
      "d) bottom up merge sort"
    ]
  },
  {
    numb: 79,
    question: " Which of the following is an advantage of binary insertion sort over its standard version?",
    answer: "c) it makes less number of comparisons",
    options: [
      "a) it has better time complexity",
      "b) it has better space complexity",
      "c) it makes less number of comparisons",
      "d) it has no significant advantage"
    ]
  },
  {
    numb: 80,
    question: "Binary Insertion sort is an online sorting algorithm.",
    answer: "a) True",
    options: [
      "a) True",
      "b) False",
      "Na",
      "Na"
    ]
  },
  {
    numb: 81,
    question: "How many comparisons will be made in the worst case when an array of size n will be sorted by using a binary insertion sort algorithm?",
    answer: "c) log n",
    options: [
      "a) n",
      "b) 1",
      "c) log n",
      "d) n log n"
    ]
  },
  {
    numb: 82,
    question: "Which of the following sorting algorithm is stable?",
    answer: "c) Binary insertion sort",
    options: [
      "a) Selection sort",
      "b) Quick sort",
      "c) Binary insertion sort",
      "d) Heap sort"
    ]
  },
  {
    numb: 83,
    question: "Which of the following sorting algorithm uses a binary search?",
    answer: "b) binary insertion sort",
    options: [
      "a) radix sort0",
      "b) binary insertion sort",
      "c) odd-even sort",
      "d) bead sort"
    ]
  },
  {
    numb: 84,
    question: "What is the average case time complexity of binary insertion sort?",
    answer: "c) O(n^2)",
    options: [
      "a) O(n)",
      "b) O(n log n)",
      "c) O(n^2)",
      "d) O(log n)"
    ]
  },
  
];