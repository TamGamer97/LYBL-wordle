

const wordsList = [
    'LIVE',
    'DIET',
    'YOGA',
    'SWIM',
    'WALK',
    'HEAL',
    'MIND',
    'PURE',
    'COOK',
    'MOVE',
    'WELL',
    'HIKE',
    'REST',
    'FAST',
    'HERB',
    'BIKE',
    'JUMP',
    'SOUP',
    'MILK',
    'CALM',
    'EASE',
    'CURE',
    'LEAN',
    'KIND',
    'WARM',
    'GLOW',
    'PACE',
    'LEAF',
    'LUSH',
    'PARK',
    'COOL',
    'HOPE',
    'CARE',
]

function initGame()
{
    function randomNum(min, max)
    {return Math.floor(Math.random() * (max - min + 1)) + min;}

    // var grid = [ '-', '-', '-', '-', 
    //                '-', '-', '-', '-',
    //                '-', '-', '-', '-',
    //                '-', '-', '-', '-' ]


    var r = 0
    while (r < 4)
    {
        const word = wordsList[randomNum(0, wordsList.length - 1)]

        wordsList.splice( wordsList.indexOf(word), 1 )
    
        console.log(word)
    
        const randomLetterIndex = randomNum(0, 4 - 1)
    
    
        grid[(4*r) + randomLetterIndex] = word[randomLetterIndex]
    
        var wordL = []
        for (l in word)
        {
            const lett = word[l]
            correctGrid.push(lett)
            if(l != randomLetterIndex)
            {
                wordL.push(lett)
            }
        }
        
        totalLettersList.push(wordL)
        // letters = shuffleArray(letters)

        r+=1
    }



    // loadGrid(grid)
    // loadOutsideGrid(letters)


    cycleGame(0)

}



