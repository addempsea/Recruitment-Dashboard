<template>
    <div>
        <div class="container">
            <div class="container-side">
                <div class="p-tag"><p>Take Assessment</p></div>
                <p class="dot-text">Thank you!</p>
            </div>
            <div class="right">
                <h2>Timer</h2>
                <p>23min0043sec</p>
            </div>
        </div>
        <div>
            <div class="image">
            <img src="../assets/confetti.png" alt="">
            </div>
            <div class="message">
            <p>We have received your assessment test, we will get back to you soon.</p>
            <p class="best-luck">Best of luck</p>
            </div>
        </div>
        
            <button class="button">Home</button>
        
        

    </div>
</template>


<style scoped>
.best-luck {
    margin-left:200px;
    /* margin-bottom: 100px;  */
}
.button {
    background: #31D283;
    border-radius: 4px;
    color:white;
    width:205px;
    height:41px;
    margin-left: 400px;
    margin-top: 20px;
}
.image {
    margin-left: 450px;
    margin-top: 90px;
}
.message {
    margin-left: 250px;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16.7273px;
}
.container {
    display: flex;
    justify-content: space-between;
    
}
.dot-text{
    width: 510px;
    font-family: Lato;
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    color: #2B3C4E;
    margin-left: 0px;
}
.container > p {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    color: #2B3C4E;
}
.right h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    margin-top: 0px;
    line-height: 17px;
    margin-top: 40px;
}
.p-tag {
    font-family: Lato;
    font-style: normal;
    /* font-weight: 100; */
    font-size: 30px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    margin-right: 300px;
}
.right p {
    
    font-family: Lato;
    font-style: normal;
    font-weight: lighter;
    font-size: 48px;
    color: #2B3C4E;
    /* margin-bottom: 300px; */
}
</style>