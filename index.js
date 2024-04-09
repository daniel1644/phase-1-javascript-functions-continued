// code your solution here


function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }


  const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`;


  function wrapAdjective(flair = '*') {
    return function(adj) {
      return `You are ${flair}${adj}${flair}!`;
    }
  }
  
  const highlightWithAsterisks = wrapAdjective('*');
  const highlightWithDoublePipes = wrapAdjective('||');
  
  console.log(highlightWithAsterisks("a hard worker"));    // "You are *a hard worker*!"
  console.log(highlightWithDoublePipes("a dedicated programmer")); // "You are ||a dedicated programmer||!"


  