const price = 550;
let seatLeft = 32;
let selectedSeat = 0;
let totalAmount = 0;


const allButton = document.getElementsByClassName('all-btn')
for(const button of allButton){
    button.addEventListener('click',function handleClick(){
       if(selectedSeat<=3){
        this.classList.toggle('bg-lime-500')
        seatLeft =seatLeft - 1;
        selectedSeat = selectedSeat + 1;
        totalAmount = price*selectedSeat
        setInnerText('seat-left',seatLeft);
        setInnerText('selected-seat',selectedSeat);
        setInnerText('total-amount',totalAmount)
     //    display the row
     const tableBody = document.getElementById('table-body')
     const seatNumber = button.innerText
     const classStatus ='economy'
     const seatPrice = 550
     const td = document.createElement('td')
     td.innerText = seatNumber;
     const td2 =document.createElement('td2')
     td2.innerText =classStatus
     const td3 =document.createElement('td3')
     td3.innerText =seatPrice;
     const tr = document.createElement('tr')
     tr.appendChild(td)
     tr.appendChild(td2)
     tr.appendChild(td3)
     tableBody.appendChild(tr)

 
       }
      
    })
}



function hidePopup(){
   const popup= document.getElementById('my_modal_1')
   popup.classList.add('hidden')

}