const React=(function() {
    let state=[];
    let idx=0;
    
    function useState(initVal) {
      const _idx=idx;
      state[_idx]=state[_idx] || initVal;
      
      function setState(val) {
          state[_idx]=val;
      }
      
      idx++;
      return [state[_idx],setState];
   }
    
    function render(component) {
      idx=0;
      const a=component();
      a.render();
      return a;
    }
    
    return {useState,render};
  })()
  
  
  
  
  function wrapper() {
    const [state,setState]=React.useState(0);
    const [color,setColor]=React.useState("black");
    
    return  {
      render:()=> console.log(`state value`,state,color),
      click:()=> setState(state+1),
      change:()=>setColor("pink")
    }
  }
  
  
  let rendered=React.render(wrapper);
  rendered.click();
  rendered.change();
  React.render(wrapper);
  