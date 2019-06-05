<template>
    <div class="login">
        <div class="login-logo">
            <img width="60" height="60" src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
        </div>
        <form action="">
            <div class="phoneNum">
                <input class ="phoneIn" type="text" name="" id="" placeholder="手机号">
                <span class= "cest">获取验证码</span>
            </div>
            <div class="recest">
                <input  class ="phoneIn" type="text" name="" id="" placeholder="验证码">
            </div>
        </form>
        <div class="submit">
            <button class="btn-login">登录</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .login-logo{
        width:100%;
        height:60px;
        display:flex;
        justify-content: center;
        margin-top:80px;
    }
    form{
        margin-top:40px;
        .phoneNum{
            width:100%;
            height:55px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .phoneIn{
                width:90%;
                height:55px;
                border:none;
                border-bottom:1px solid rgba(204, 204, 204, 0.394);
            }
            .cest{
                position: absolute;
                right:20px;
                color:rgba(193, 192, 192, 0.9);
                font-size:12px;
            }
        }
        .recest{
            width:100%;
            height:55px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .phoneIn{
                width:90%;
                height:55px;
                border:none;
                border-bottom:1px solid rgba(204, 204, 204, 0.394);
            }
        }
    }
    .submit{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:200px;
        .btn-login{
            width:90%;
            height:45px;
            background-color: #ff5f16;
            border:none;
            border-radius: 5px;
            color:white;
            font-size: 18px;
        }
    }
</style>
