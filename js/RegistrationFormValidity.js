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
    document.getElementById("add_l1").onkeyup = addl1_Validate;
    document.getElementById("add_l2").onkeyup = addl2_Validate;
    document.getElementById("city").onkeyup = city_Validate;
    document.getElementById("state").onclick = state_Validate;
    document.getElementById("state").onkeyup = state_Validate;
    document.getElementById("state").onblur = state_Validate;
    document.getElementById("zipcode").oninput = zipFormat;
    document.getElementById("gender").onsubmit = gender_Validate;
    document.getElementById("marital").onsubmit = ms_Validate;
    document.getElementById("d_o_b").onblur = dob_Validate;
    document.getElementById("d_o_b").onkeyup = dob_Validate;
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

function addl1_Validate() {
    const addl1_Input = document.getElementById("add_l1");
    const add_l1 = addl1_Input.value;
    const addl1_Err = document.getElementById("addl1_Err");
    if (add_l1 === "" || add_l1.length > 100)
    {
        if (addl1_Err)
        {
            addl1_Err.classList.remove("hide");
            addl1_Err.classList.add("show");
            addl1_Err.style.color = "darkred";
        }
        addl1_Input.style.borderRadius = "4px";
        addl1_Input.style.borderInlineWidth = "5px";
        addl1_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (addl1_Err)
        {
            addl1_Err.classList.add("hide");
            addl1_Err.classList.remove("show");
        }
        addl1_Input.style.borderRadius = "4px";
        addl1_Input.style.borderInlineWidth = "1px";
        addl1_Input.style.borderColor = "lawngreen";
        return true;
    }
}

function addl2_Validate() {
    const addl2_Input = document.getElementById("add_l2");
    const add_l2 = addl2_Input.value;
    const addl2_Err = document.getElementById("addl2_Err");
    if (add_l2.length > 100)
    {
        if (addl2_Err)
        {
            addl2_Err.classList.remove("hide");
            addl2_Err.classList.add("show");
            addl2_Err.style.color = "darkred";
        }
        addl2_Input.style.borderRadius = "4px";
        addl2_Input.style.borderInlineWidth = "5px";
        addl2_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (addl2_Err)
        {
            addl2_Err.classList.add("hide");
            addl2_Err.classList.remove("show");
        }
        addl2_Input.style.borderRadius = "4px";
        addl2_Input.style.borderInlineWidth = "1px";
        addl2_Input.style.borderColor = "lawngreen";
        return true;
    }
}

function city_Validate() {
    const city_Input = document.getElementById("city");
    const city = city_Input.value;
    const city_Err = document.getElementById("city_Err");
    if (city === "" || city.length > 50)
    {
        if (city_Err)
        {
            city_Err.classList.remove("hide");
            city_Err.classList.add("show");
            city_Err.style.color = "darkred";
        }
        city_Input.style.borderRadius = "4px";
        city_Input.style.borderInlineWidth = "5px";
        city_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (city_Err)
        {
            city_Err.classList.add("hide");
            city_Err.classList.remove("show");
        }
        city_Input.style.borderRadius = "4px";
        city_Input.style.borderInlineWidth = "1px";
        city_Input.style.borderColor = "lawngreen";
        return true;
    }
}

function state_Validate() {
    const state_Input = document.getElementById("state");
    const state = state_Input.value;
    const state_Err = document.getElementById("state_Err");
    if (state === "No_state" || state.length > 52)
    {
        if (state_Err)
        {
            state_Err.classList.remove("hide");
            state_Err.classList.add("show");
            state_Err.style.color = "darkred";
        }
        state_Input.style.borderRadius = "4px";
        state_Input.style.borderInlineWidth = "5px";
        state_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (state_Err)
        {
            state_Err.classList.add("hide");
            state_Err.classList.remove("show");
        }
        state_Input.style.borderRadius = "4px";
        state_Input.style.borderInlineWidth = "1px";
        state_Input.style.borderColor = "lawngreen";
        return true;
    }
}

function zipFormat() {
    const zipInput = document.getElementById("zipcode");
    let zipEle = zipInput.value.replace(/\D/g, "");
    const zip_Err = document.getElementById("zip_Err");
    if (zipEle.length > 5 && zipEle.length <= 10)
    {
        zipEle = zipEle.substring(0, 5) + "-" + zipEle.substring(5);
    }
    zipInput.value = zipEle;
    let zip = zipInput.value;
    if (zip.length < 5 || zip.length > 10)
    {
        if (zip_Err)
        {
            zip_Err.classList.remove("hide");
            zip_Err.classList.add("show");
            zip_Err.style.color = "darkred";
        }
        zipInput.style.borderRadius = "4px";
        zipInput.style.borderInlineWidth = "5px";
        zipInput.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (zip_Err)
        {
            zip_Err.classList.add("hide");
            zip_Err.classList.remove("show");
        }
        zipInput.style.borderRadius = "4px";
        zipInput.style.borderInlineWidth = "1px";
        zipInput.style.borderColor = "lawngreen";
        return true;
    }
}

function gender_Validate() {
    const gender_radio = document.getElementById("gender");
    const gender = gender_radio.value;
    const gender_Err = document.getElementById("gender_Err");
    if (gender.length > 50)
    {
        if (gender_Err)
        {
            gender_Err.classList.remove("hide");
            gender_Err.classList.add("show");
            gender_Err.style.color = "darkred";
        }
        gender_radio.style.borderRadius = "4px";
        gender_radio.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (gender_Err)
        {
            gender_Err.classList.add("hide");
            gender_Err.classList.remove("show");
        }
        gender_radio.style.borderRadius = "4px";
        gender_radio.style.borderColor = "lawngreen";
        return true;
    }
}

function ms_Validate() {
    const ms_radio = document.getElementById("marital");
    const ms = ms_radio.value;
    const ms_Err = document.getElementById("ms_Err");
    if (ms.length > 50)
    {
        if (ms_Err)
        {
            ms_Err.classList.remove("hide");
            ms_Err.classList.add("show");
            ms_Err.style.color = "darkred";
        }
        ms_radio.style.borderRadius = "4px";
        ms_radio.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (ms_Err)
        {
            ms_Err.classList.add("hide");
            ms_Err.classList.remove("show");
        }
        ms_radio.style.borderRadius = "4px";
        ms_radio.style.borderColor = "lawngreen";
        return true;
    }
}

function dob_Validate() {
    const dob_Input = document.getElementById("d_o_b");
    const dob = dob_Input.value;
    const dob_Err = document.getElementById("dob_Err");
    if (dob === "")
    {
        if (dob_Err)
        {
            dob_Err.classList.remove("hide");
            dob_Err.classList.add("show");
            dob_Err.style.color = "darkred";
        }
        dob_Input.style.borderRadius = "4px";
        dob_Input.style.borderInlineWidth = "5px";
        dob_Input.style.borderColor = "orangered";
        return false;
    }
    else
    {
        if (dob_Err)
        {
            dob_Err.classList.add("hide");
            dob_Err.classList.remove("show");
        }
        dob_Input.style.borderRadius = "4px";
        dob_Input.style.borderInlineWidth = "1px";
        dob_Input.style.borderColor = "lawngreen";
        return true;
    }
}