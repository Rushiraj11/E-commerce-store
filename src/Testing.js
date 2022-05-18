import React from 'react'
import styled from "styled-components";



 const Testing = () => {
  return (
    <div>
<Wrapper>
    <h3>hello world</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, a!</p>
    <button>click</button>
</Wrapper>
    </div>
  )
}
                   // for styling purpose so that we don't need to worry about the class to be over written
const Wrapper = styled.section`  
h3 {
    color:red;
}
`
export default Testing