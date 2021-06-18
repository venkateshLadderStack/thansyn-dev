import React from 'react';
const hadleLoad=()=>{

}
const PopUp= () => {
    return(
    <div class="popup_wrapper">
        <div class="popup_box">
            <img src="./assets/img/mask-3.png" class="mask_3" alt="img" />
            <div class="container">
                <div class="header_content">
                    <h4 class="m-0">THE ANALYST SYNDICATE</h4>
                    <img src="./assets/img/close.svg" class="popup_close" alt="" />
                </div>
                <div class="main_content">
                    <h2>Get insights from <br /> the world’s leading analysts</h2>
                    <div class="btn_group">
                        <button type="submit" class="blue_btn popup_btn">Subscribe [Free]</button>
                         <button type="submit" class="blue_btn popup_btn2">Connect now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
    }
export default PopUp