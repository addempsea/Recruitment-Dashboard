<template>
    <div>
        <div class="container">
            <div class="container-side">
                <div class="p-tag"><p>Take Assessment</p></div>
                <p class="dot-text">Click the button below to start assessment, you have limited time for this test</p>
            </div>
            <div class="right">
                <h2>Timer</h2>
                <p>00min000sec</p>
            </div>
        </div>

        <div class="timer">
            <center>
                <img class="timer-logo" src="../assets/timer.png" alt="timer">
                <p>We have four days left until the next assessment
                <br>Watch this space</p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" >
                        Take Assessment
                    </button>
                </div>
            </center>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}
/* .container-side {
    float: right;
} */
.right h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
    margin-top: 0px;
    line-height: 17px;
}
.right p {
    
    font-family: Lato;
    font-style: normal;
    font-weight: lighter;
    font-size: 48px;
    color: #2B3C4E;
    /* margin-bottom: 300px; */
}
/* .container-side p {
    margin-left: 100px;
} */

.dot-text{
    width: 510px;
    font-family: Lato;
    font-style: italic;
    font-weight: bold;
    font-size: 15px;
    color: #2B3C4E;
    margin-left: 0px;
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
.container > p {
    font-family: Lato;
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    color: #2B3C4E;
}
h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    margin-right: 100px;
    line-height: 52px;
    color: #4F4F4F;
}
.timer {
    width: 100%;
    margin-top: 100px;
}
.timer-logo {
    padding-bottom: 20px;
}
.timer > p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16.7273px;
    text-align: center;
    color: #4F4F4F;
}
button {
    width: 50%;
    max-width: 205px;
    height: 41px;
    background: #B1B1B1;
    border-radius: 4px;
    border: none;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>
