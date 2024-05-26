function registerHandlers()
{
    document.getElementById("user_name").onkeyup = validate_un;
    document.getElementById("password").onkeyup = fPass_V;
    document.getElementById("repeat_password").onkeyup = PassValidate;
    document.getElementById("password").onblur = PassValidate;
    document.getElementById("first_name").onkeyup = fn_Validate;
    document.getElementById("last_name").onkeyup = ln_Validate;
    document.getElementById("ph_n").onkeyup = PhoneFormat;
    document.getElementById("email").onkeyup = EmailValidate;
}

function validate_un() {
    const un_Input = document.getElementById("user_name");
    const username = un_Input.value;
    const un_Err = document.getElementById("un_Err");
    if (username === "" || username.length < 6 || username.length > 50)
    {
        if (un_Err)
        {
            un_Err.classList.remove("hide");
            un_Err.classList.add("show");
            un_Err.style.color = "darkred";
        }
        un_Input.style.borderRadius = "4px";
        un_Input.style.borderInlineWidth = "5px";
        un_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (un_Err)
        {
            un_Err.classList.add("hide");
            un_Err.classList.remove("show");
        }
        un_Input.style.borderRadius = "4px";
        un_Input.style.borderInlineWidth = "1px";
        un_Input.style.borderColor = "lawngreen";
        return true;
    }
}
function fPass_V()
{
    const pswd_input = document.getElementById("password");
    const pswd = pswd_input.value;
    const pswd_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const cap_pattern = /(?=.*[A-Z])/;
    const small_pattern = /(?=.*[a-z])/;
    const num_pattern = /(?=.*\d)/;
    const spec_pattern = /[@$!%*?&]/;
    const pswdErr = document.getElementById("passErr");
    const cap_Err = document.getElementById("cap_Err");
    const small_Err = document.getElementById("small_Err");
    const num_Err = document.getElementById("num_Err");
    const spec_Err = document.getElementById("spec_Err");
    const min_Err = document.getElementById("min_Err");
    if (!pswd_pattern.test(pswd))
    {
        if (pswdErr) {
            pswdErr.classList.remove("hide");
            pswdErr.classList.add("show");
            pswdErr.style.color = "darkred";
        }
        pswd_input.style.borderRadius = "4px";
        pswd_input.style.borderInlineWidth = "4px";
        pswd_input.style.borderColor = "orangered";
        if (!cap_pattern.test(pswd))
        {
            if (cap_Err)
            {
                cap_Err.classList.remove("hide")
                cap_Err.classList.add("show");
                cap_Err.style.color = "darkred";
            }
        }
        if (cap_pattern.test(pswd))
        {
            if (cap_Err)
            {
                cap_Err.classList.add("hide")
                cap_Err.classList.remove("show");
            }
        }
        if (!small_pattern.test(pswd))
        {
            if (small_Err)
            {
                small_Err.classList.remove("hide")
                small_Err.classList.add("show");
                small_Err.style.color = "darkred";
            }
        }
        if (small_pattern.test(pswd))
        {
            if (small_Err)
            {
                small_Err.classList.add("hide")
                small_Err.classList.remove("show");
            }
        }
        if (!num_pattern.test(pswd))
        {
            if (num_Err)
            {
                num_Err.classList.remove("hide")
                num_Err.classList.add("show");
                num_Err.style.color = "darkred";
            }
        }
        if (num_pattern.test(pswd))
        {
            if (num_Err)
            {
                num_Err.classList.add("hide")
                num_Err.classList.remove("show");
            }
        }
        if (!spec_pattern.test(pswd))
        {
            if (spec_Err)
            {
                spec_Err.classList.remove("hide")
                spec_Err.classList.add("show");
                spec_Err.style.color = "darkred";
            }
        }
        if (spec_pattern.test(pswd))
        {
            if (spec_Err)
            {
                spec_Err.classList.add("hide")
                spec_Err.classList.remove("show");
            }
        }
        if (pswd.length < 8)
        {
            if (min_Err)
            {
                min_Err.classList.remove("hide")
                min_Err.classList.add("show");
                min_Err.style.color = "darkred";
            }
        }
        if (pswd.length >= 10)
        {
            if (min_Err)
            {
                min_Err.classList.add("hide")
                min_Err.classList.remove("show");
            }
        }
    } else {
        if (pswdErr) {
            pswdErr.classList.add("hide");
            pswdErr.classList.remove("show");
        }
        pswd_input.style.borderRadius = "4px";
        pswd_input.style.borderInlineWidth = "1px";
        pswd_input.style.borderColor = "lawngreen";
        if (cap_pattern.test(pswd))
        {
            if (cap_Err)
            {
                cap_Err.classList.add("hide")
                cap_Err.classList.remove("show");
            }
        }
        if (small_pattern.test(pswd))
        {
            if (small_Err)
            {
                small_Err.classList.add("hide")
                small_Err.classList.remove("show");
            }
        }
        if (num_pattern.test(pswd))
        {
            if (num_Err)
            {
                num_Err.classList.add("hide")
                num_Err.classList.remove("show");
            }
        }
        if (spec_pattern.test(pswd))
        {
            if (spec_Err)
            {
                spec_Err.classList.add("hide")
                spec_Err.classList.remove("show");
            }
        }
        if (pswd.length >= 10)
        {
            if (min_Err)
            {
                min_Err.classList.add("hide")
                min_Err.classList.remove("show");
            }
        }
    }
}

function PassValidate() {
    const pswd_input = document.getElementById("password");
    const r_pswd_input = document.getElementById("repeat_password");
    const pswd = pswd_input.value;
    const r_pswd = r_pswd_input.value;
    const pswdErr = document.getElementById("passErr");
    const r_Error = document.getElementById("r_passErr");
    if (r_pswd !== pswd || pswd === "")
    {
        if (r_Error)
        {
            r_Error.classList.remove("hide");
            r_Error.classList.add("show");
            r_Error.style.color = "darkred";
        }
        r_pswd_input.style.borderRadius = "4px";
        r_pswd_input.style.borderInlineWidth = "5px"
        r_pswd_input.style.borderColor = "orangered";
        return false;
        }
    else {
        if (r_Error) {
            r_Error.classList.add("hide");
            r_Error.classList.remove("show");
        }
        r_pswd_input.style.borderRadius = "4px";
        r_pswd_input.style.borderInlineWidth = "1px";
        r_pswd_input.style.borderColor = "lawngreen";
        if (pswdErr) {
            pswdErr.classList.add("hide");
            pswdErr.classList.remove("show");
        }
        pswd_input.style.borderRadius = "4px";
        pswd_input.style.borderColor = "lawngreen";
        return true;
    }
}

function fn_Validate() {
    const fn_Input = document.getElementById("first_name");
    const first_name = fn_Input.value;
    const fn_Err = document.getElementById("fn_Err");
    if (first_name === "" || first_name.length > 50)
    {
        if (fn_Err)
        {
            fn_Err.classList.remove("hide");
            fn_Err.classList.add("show");
            fn_Err.style.color = "darkred";
        }
        fn_Input.style.borderRadius = "4px";
        fn_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (fn_Err)
        {
            fn_Err.classList.add("hide");
            fn_Err.classList.remove("show");
        }
        fn_Input.style.borderRadius = "4px";
        fn_Input.style.borderColor = "lawngreen";
        return true;
    }
}

function ln_Validate() {
    const ln_Input = document.getElementById("last_name");
    const last_name = ln_Input.value;
    const ln_Err = document.getElementById("ln_Err");
    if (last_name === "" || last_name.length > 50)
    {
        if (ln_Err)
        {
            ln_Err.classList.remove("hide");
            ln_Err.classList.add("show");
            ln_Err.style.color = "darkred";
        }
        ln_Input.style.borderRadius = "4px";
        ln_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (ln_Err)
        {
            ln_Err.classList.add("hide");
            ln_Err.classList.remove("show");
        }
        ln_Input.style.borderRadius = "4px";
        ln_Input.style.borderColor = "lawngreen";
        return true;
    }
}

function PhoneFormat() {
    const ph_Input = document.getElementById("ph_n");
    let phEle = ph_Input.value.replace(/\D/g, "");
    const ph_Err = document.getElementById("ph_Err");
    if (phEle.length > 3 && phEle.length <= 10)
    {
        if (phEle.length > 3 && phEle.length <= 6)
        {
            phEle = phEle.substring(0, 3) + "-" + phEle.substring(3);
        }
        else if (phEle.length > 6 && phEle.length <= 10)
        {
            phEle = phEle.substring(0, 3) + "-" + phEle.substring(3, 6) + "-" + phEle.substring(6);
        }
    }
    ph_Input.value = phEle;
    let ph_n = ph_Input.value;
    if (ph_n.length !== 12)
    {
        if (ph_Err)
        {
            ph_Err.classList.remove("hide");
            ph_Err.classList.add("show");
            ph_Err.style.color = "darkred";
        }
        ph_Input.style.borderRadius = "4px";
        ph_Input.style.borderInlineWidth = "5px";
        ph_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (ph_Err)
        {
            ph_Err.classList.add("hide");
            ph_Err.classList.remove("show");
        }
        ph_Input.style.borderRadius = "4px";
        ph_Input.style.borderInlineWidth = "1px";
        ph_Input.style.borderColor = "lawngreen";
        return true;
    }
}

function EmailValidate() {
    const email_Input = document.getElementById("email");
    const email = email_Input.value;
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const email_Err = document.getElementById("email_Err");
    if (!emailPattern.test(email))
    {
        if (email_Err)
        {
            email_Err.classList.remove("hide");
            email_Err.classList.add("show");
            email_Err.style.color = "darkred";
        }
        email_Input.style.borderRadius = "4px";
        email_Input.style.borderInlineWidth = "5px";
        email_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (email_Err)
        {
            email_Err.classList.add("hide");
            email_Err.classList.remove("show");
        }
        email_Input.style.borderRadius = "4px";
        email_Input.style.borderInlineWidth = "1px";
        email_Input.style.borderColor = "lawngreen";
        return true;
    }

}