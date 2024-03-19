

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
    'WELL'
]

function initGame()
{
    function randomNum(min, max)
    {return Math.floor(Math.random() * (max - min + 1)) + min;}
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    var grid = [ '-', '-', '-', '-', 
                   '-', '-', '-', '-',
                   '-', '-', '-', '-',
                   '-', '-', '-', '-' ]

    var letters = []

    var r = 0
    while (r < 4)
    {
        const word = wordsList[randomNum(0, wordsList.length - 1)]

        wordsList.splice( wordsList.indexOf(word), 1 )
    
        console.log(word)
    
        const randomLetterIndex = randomNum(0, 4 - 1)
    
    
        grid[(4*r) + randomLetterIndex] = word[randomLetterIndex]
    
    
        for (l in word)
        {
            const lett = word[l]
            if(l != randomLetterIndex)
            {
                letters.push(lett)
            }
        }
    
        letters = shuffleArray(letters)

        r+=1
    }



    loadGrid(grid)
    loadOutsideGrid(letters)




}