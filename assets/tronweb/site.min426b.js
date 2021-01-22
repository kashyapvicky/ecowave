var userAddress = '';
var contractBalanceRate = 0;
var userPercentRate = 0;
var userAvailable = 0;
var userTotalDeposits = 0;
var userTotalWithdrawn = 0;
var userAmountOfDeposits = 0;
var userLastDepositTime = 0;



var abi =[{"constant":true,"inputs":[],"name":"contractInfo","outputs":[{"name":"_invested","type":"uint256"},{"name":"_withdrawn","type":"uint256"},{"name":"_match_bonus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"userInfo","outputs":[{"name":"for_withdraw","type":"uint256"},{"name":"withdrawable_bonus","type":"uint256"},{"name":"total_invested","type":"uint256"},{"name":"total_withdrawn","type":"uint256"},{"name":"total_match_bonus","type":"uint256"},{"name":"structure","type":"uint256[3]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"seperatePayoutOf","outputs":[{"name":"withdrawable","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"investmentsInfo","outputs":[{"name":"ids","type":"uint8[]"},{"name":"endTimes","type":"uint256[]"},{"name":"amounts","type":"uint256[]"},{"name":"totalWithdraws","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"payoutOf","outputs":[{"name":"value","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"removeWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"setWhitelist","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tarifs","outputs":[{"name":"life_days","type":"uint256"},{"name":"percent","type":"uint256"},{"name":"min_inv","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"released","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_tarif","type":"uint8"},{"name":"_upline","type":"address"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ref_bonuses","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"releaseTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"match_bonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"withdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"invested","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"players","outputs":[{"name":"upline","type":"address"},{"name":"dividends","type":"uint256"},{"name":"match_bonus","type":"uint256"},{"name":"last_payout","type":"uint256"},{"name":"total_invested","type":"uint256"},{"name":"total_withdrawn","type":"uint256"},{"name":"total_match_bonus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"withdrawFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokens","type":"uint256"}],"name":"updateInitialsupply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"whiteListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getStructure","outputs":[{"name":"for_withdraw","type":"uint256"},{"name":"withdrawable_bonus","type":"uint256"},{"name":"total_invested","type":"uint256"},{"name":"total_withdrawn","type":"uint256"},{"name":"total_match_bonus","type":"uint256"},{"name":"L1","type":"uint256"},{"name":"L2","type":"uint256"},{"name":"L3","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_stakingAddress","type":"address"},{"name":"_tokenContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":true,"name":"upline","type":"address"},{"indexed":false,"name":"bonus","type":"uint256"}],"name":"Upline","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"tarif","type":"uint8"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"MatchPayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"}];

$(function() {
    console.log('function called');
    function setUserAddress(address) {
        // $('.trxWallet').val(address);
        // $('.trxWalletTa125').html('<a href="https://tronex02.com/?ref=' + address + '"><img src="https://tronex02.com/img/125.gif" width="125" height="125" alt="tronex02.com | Get +200% up to your deposit right now. Safe and legit!"></a>');
        // $('.trxWalletTa468').html('<a href="https://tronex02.com/?ref=' + address + '"><img src="https://tronex02.com/img/468.gif" width="468" height="60" alt="tronex02.com | Get +200% up to your deposit right now. Safe and legit!"></a>');
        // $('.trxWalletTa728').html('<a href="https://tronex02.com/?ref=' + address + '"><img src="https://tronex02.com/img/728.gif" width="728" height="90" alt="tronex02.com | Get +200% up to your deposit right now. Safe and legit!"></a>');
        // $('.reflink').html('https://tronex02.com/?ref=' + address);
        // $('#reflink').val('https://tronex02.com/?ref=' + address)
    }
    var obj = setInterval(async () => {
        if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
            clearInterval(obj);
            userAddress = window.tronWeb.defaultAddress.base58;

            console.log('user_address',userAddress);
            $('.authFalse').hide();
            $('.authTrue').attr('style', 'display:block !important');
            setUserAddress(userAddress);
            update();
            setTimeout(function() {
                var accountInterval = setInterval(async () => {
                    if (window.tronWeb.defaultAddress.base58 !== userAddress) {
                        userAddress = window.tronWeb.defaultAddress.base58;
                        setUserAddress(userAddress);
                        update()
                         player_info();

                    }
                }, 100)
            }, 5000)
        }
    }, 10);

    //  //just to get referral address
     let search = window.location.search;
     let params = new URLSearchParams(search);
     let referral = params.get('ref');
     
     userReferer = referral;
     if(userReferer != null || userReferer != undefined)
     {
         //$('.userReferer').text(userReferer);
     }
    // console.log('userReferer',userReferer);
 
 

    async function invest() {
        var amount = $('#invest_filed_id').val();
        console.log(contractAddress);
        var amount  = parseInt(amount);
        if( !(amount === parseInt(amount, 10)))
        {
            alert('enter valid number of tron')
        }else if (amount < 100)
        {
            alert('Min is 100 tron');
        }else{
            amount = Math.floor(amount * 1000000);
            if (!tronWeb.isAddress(userReferer)) {
                userReferer = refererDefault
            }

            try {
                let instance = await tronWeb.contract(abi, contractAddress);
                let res = await instance.deposit(0,userReferer).send({
                callValue: amount
            });
           
            setTimeout(function() {
                //update()
            }, 5000)
            } catch (error) {console.log('deposit method cathc block',error)}

        }
        // var amount = parseFloat($('.trxAmount' + n).val().replace(',', '.'));
        // if (!amount) {
        //     $('.trxAmountError' + n + '1').show()
        // } else if (amount < 100) {
        //     $('.trxAmountError' + n + '2').show()
        // } else {
        //     amount = Math.floor(amount * 1000000);
        //     if (!tronWeb.isAddress(userReferer)) {
        //         userReferer = refererDefault
        //     }
        //     try {
        //         let instance = await tronWeb.contract(abi, contractAddress);
        //         let res = await instance.invest(userReferer).send({
        //             callValue: amount
        //         });
        //         if (!$('div[data-remodal-id="wallet"]').is(':visible')) {
        //             $('#goToWallet').trigger('click')
        //         }
        //         setTimeout(function() {
        //             update()
        //         }, 5000)
        //     } catch (error) {}
        // }
    }
    $(".investButton").click(function(e) {
        //console.log('button clicked');
        e.preventDefault();
        invest();
        return false
    });

    setInterval( async function() {
       // console.log('function callinge each second')
        let instance = await tronWeb.contract(abi, contractAddress);
        let res = await instance.payoutOf(userAddress).call();
        let dividends = parseInt(res.value._hex, 16)/1000000;
       // console.log(res);
       // dividends =  tronWeb.toDecimal(res.value._hex, 16));
        console.log('dividends',dividends);
        $('#dividends_tag_id').html(dividends);
    
        if (userAddress) {
            //update()
        }
    }, 5000);
   
   
    async function withdraw() {
        try {
            let instance = await tronWeb.contract(abi, contractAddress);
            let res = await instance.withdraw().send({
                callValue: 0
            });
            if (!$('div[data-remodal-id="wallet"]').is(':visible')) {
                $('#goToWallet').trigger('click')
            }
            setTimeout(function() {
                update()
            }, 5000)
        } catch (error) {}
    }
    $(".withdrawButton").click(function(e) {
        e.preventDefault();
        withdraw();
        return false
    });


    async function player_info()
    {
        console.log('player_info function called');
        let instance = await tronWeb.contract(abi, contractAddress);
        let result = await instance.getStructure(userAddress).call();

        console.log('player_info', result);
        let L1 = parseInt(result.L1._hex, 16);
        let L2 = parseInt(result.L2._hex, 16);
        let L3 = parseInt(result.L3._hex, 16);

    

        let avail_to_withdraw = parseInt(result.for_withdraw._hex, 16)/1000000;
        let total_invested = parseInt(result.total_invested._hex, 16)/1000000;
        let total_withdrawn = parseInt(result.total_withdrawn._hex, 16)/1000000;
        let withdrawable_bonus = parseInt(result.withdrawable_bonus._hex, 16)/1000000;

        $('#l1').html(L1);
        $('#l2').html(L2);
        $('#l3').html(L3);

        $('#withdrawable_amount').html(avail_to_withdraw);
        $('#total_invested').html(total_invested);
        $('#total_withdrawn').html(total_withdrawn);
        $('#withdrawable_bonus').html(withdrawable_bonus);


        $('#referral_avaliable').html(withdrawable_bonus);
    }


  
  
    async function update() {
        await player_info();
       
    }
   
   
});