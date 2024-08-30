<template>
    <button
        class="flex w-[204px] h-11 gap-1 justify-center items-center text-main rounded-full border-2 border-primary text-primary">
        <i class="w-6 h-6 flex justify-center items-center">
            <img src="@/assets/plus.svg" alt="Добавить">
        </i>
        <slot></slot>
    </button>
</template>

/* Button */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 20px;

position: absolute;
width: 204px;
height: 44px;
left: 787px;
top: 305px;

/* Colors / Primary */
border: 2px solid #01A7FD;
border-radius: 100px;


/* KingButton */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 4px;

width: 164px;
height: 24px;

border-radius: 4px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* 24px / plus */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
align-self: flex-start;
flex-grow: 0;


/* Union */

position: absolute;
width: 12px;
height: 12px;
left: 12px;
top: 3.51px;

/* Colors / Primary */
background: #01A7FD;
transform: rotate(45deg);


/* Rectangle 24 */

position: absolute;
left: 16.62%;
right: 16.62%;
top: 45.23%;
bottom: 45.23%;

background: #C4C4C4;
border-radius: 138.148px;


/* Rectangle 25 */

position: absolute;
left: 45.23%;
right: -11.99%;
top: 83.38%;
bottom: 7.08%;

background: #C4C4C4;
border-radius: 138.148px;
transform: matrix(0, -1, 1, 0, 0, 0);


/* Label */

width: 136px;
height: 24px;

/* 16 Paragraph 2 */
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
/* identical to box height, or 171% */
display: flex;
align-items: center;
text-align: center;

/* Colors / Primary */
color: #01A7FD;


/* Inside auto layout */
flex: none;
order: 1;
align-self: center;
flex-grow: 0;
