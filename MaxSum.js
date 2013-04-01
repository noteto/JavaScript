function Solve(args)
    {
         
        var N = parseInt(args[0]); 
 
        var myArray = []; //new array where I push all elements from args[]
        var maxSum = 0;
        var i = 0;
        var maxSums =[]; //new array where I push all possible sums of elements from myArray
        var firstMax=parseInt(args[1]); //initialize max sum 
        var maximum = 0;
        var answer = 0;
 
        for(i=0;i<N;i++)
        {
            myArray.push(parseInt(args[i+1])); //taking every element from args[] and convert it to INT
        }
         
        for(i=0;i<myArray.length;i++)  //find maximal value in the array
        {
            if(myArray[i]>firstMax)
            {
                firstMax = myArray[i];
            }
        }
 
        maxSum = myArray[0];  //now I'm gonna sum all the possibles sequences of elements and find which one is max
 
        while(myArray.length>=1)  // count elements and reccord all possible sums of sequences in new array maxSums[]
        {
            for(i=1;i<myArray.length;i++)
            {
                maxSum = maxSum + myArray[i];      
                maxSums.push(maxSum);
            }
 
            myArray.shift();    // remove the first element until there are no more than 1 elements left in myArray
            maxSum = myArray[0]; // make maxSum = new first element and count again
        }
 
        maximum = maxSums[0];
 
        for(i=0;i<maxSums.length;i++) //at last find the maximal number in the array with all possible sums
        {
            if(maxSums[i] > maximum)
            {
                maximum = maxSums[i];
            }
        }
 
        if(maximum>firstMax)  //last check for negative sequences - finding the biggest value
        {
            answer = maximum;
        }
        else
        {
            answer = firstMax;
        }
 
        return answer;
    }
