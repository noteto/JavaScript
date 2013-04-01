<script>
function Solve(args)
    {
         
        var N = parseInt(args[0]);
 
        var myArray = [];
        var maxSum = 0;
        var i = 0;
        var maxSums =[];
        var firstMax=parseInt(args[1]);
        var maximum = 0;
        var answer = 0;
 
        for(i=0;i<N;i++)
        {
            myArray.push(parseInt(args[i+1]));
        }
         
        for(i=0;i<myArray.length;i++)
        {
            if(myArray[i]>firstMax)
            {
                firstMax = myArray[i];
            }
        }
 
        maxSum = myArray[0];
 
        while(myArray.length>=1)
        {
            for(i=1;i<myArray.length;i++)
            {
                maxSum = maxSum + myArray[i];      
                maxSums.push(maxSum);
            }
 
            myArray.shift();
            maxSum = myArray[0];
        }
 
        maximum = maxSums[0];
 
        for(i=0;i<maxSums.length;i++)
        {
            if(maxSums[i] > maximum)
            {
                maximum = maxSums[i];
            }
        }
 
        if(maximum>firstMax)
        {
            answer = maximum;
        }
        else
        {
            answer = firstMax;
        }
 
        return answer;
    }
</script>
