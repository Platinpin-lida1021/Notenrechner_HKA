

function round_dec(number) {
    number = number.toString();
    number_array = number.split("");
    number_array_new = new Array();
    point_count = 0;
    point_flag = false;
    for(i=0;i<number_array.length;i++){
        if(number_array[i] != '.' && !point_flag) {
            number_array_new.push(number_array[i]);
        }
        else if(number_array[i] == '.') {
            point_flag = true;
            number_array_new.push('.');
        }
        else if(point_count <=0) {
            number_array_new.push(number_array[i]);
            point_count += 1;
        }
        else {
            continue;
        }

    }
    return number_array_new;
}

function prove_check() {
    let sum_grund = 0;
    let n_grund = 0;
    for(i=0; i<10; i++) {
        checkbox_id = "checkbox-" + i.toString();
        input_id = `input-${i.toString()}`;
        checkbox = document.getElementById(checkbox_id);
        if(checkbox.checked) {
            sum_grund += parseFloat(document.getElementById(input_id).value);
            n_grund += 1;
        }
        else {
            continue;
        }
    }
    sum_grund = parseFloat(sum_grund) / parseFloat(n_grund);
    sum_grund = round_dec(sum_grund).join("");
    document.getElementById("grundstudium").innerHTML = "<mark>Grundstudium: " + sum_grund.toString() + "</mark>";

    let sum_haupt = 0;
    let n_haupt = 0;
    let ads_bild = 0
    let dsv_dsp = 0;
    let sozial = 0;
    let thesis = 0;
    for(i=10; i<33;i++) {
        checkbox_id = `checkbox-${i.toString()}`;
        input_id = `input-${i.toString()}`;
        checkbox = document.getElementById(checkbox_id);
        if(checkbox.checked) {
            if( (document.getElementById("checkbox-21").checked && document.getElementById("checkbox-22").checked) && (i==21 || i==22)) {
                if(i==21) {
                    ads_bild += parseFloat(document.getElementById(input_id).value);
                    n_haupt += 1;
                    continue;
                }
                else {
                    ads_bild += parseFloat(document.getElementById(input_id).value);
                    continue;
                }
            }

            if( (document.getElementById('checkbox-23').checked && document.getElementById("checkbox-24").checked) && (i==23 || i==24) ) {
                if(i==23) {
                    dsv_dsp += 2 * parseFloat(document.getElementById(input_id).value);
                    n_haupt += 1;
                    continue;
                }
                else {
                    dsv_dsp += parseFloat(document.getElementById(input_id).value);
                    continue;
                }
            }

            if( (document.getElementById("checkbox-28").checked && document.getElementById("checkbox-29").checked) && (i==28 || i==29) ) {
                if(i==28) {
                    sozial += parseFloat(document.getElementById(input_id).value);
                    n_haupt += 1;
                    continue;
                }
                else {
                    sozial += parseFloat(document.getElementById(input_id).value);
                    continue;
                }
            }

            if( (document.getElementById("checkbox-31").checked && document.getElementById("checkbox-32").checked) && (i==31 || i==32) ) {
                if(i==31) {
                    thesis += 2 * parseFloat(document.getElementById(input_id).value);
                    n_haupt += 3;
                    continue;
                }
                else {
                    thesis += parseFloat(document.getElementById(input_id).value);
                    continue;
                }
            }


            sum_haupt += parseFloat(document.getElementById(input_id).value);
            n_haupt += 1;
        }
        else {
            continue;
        }
    }

    if(document.getElementById("checkbox-21").checked && document.getElementById("checkbox-22").checked) {
        sum_haupt += ( (ads_bild) / 2 );
    }
    if(document.getElementById('checkbox-23').checked && document.getElementById("checkbox-24").checked) {
        sum_haupt += ( (dsv_dsp) / 3 );
    }
    if(document.getElementById("checkbox-28").checked && document.getElementById("checkbox-29").checked) {
        sum_haupt += ( (sozial) / 2 );
    }
    if(document.getElementById("checkbox-31").checked && document.getElementById("checkbox-32").checked) {
        sum_haupt += 3 * (thesis / 3);
    }

    sum_haupt = parseFloat(sum_haupt) / parseFloat(n_haupt);
    sum_haupt = round_dec(sum_haupt).join("");
    document.getElementById('hauptstudium').innerHTML = "<mark>Hauptstudium: " + sum_haupt.toString() + "</mark>";

}

document.addEventListener("DOMContentLoaded", function() {
    // ============ Semester 1. ============
    //====================================
    //====================================
    const checkbox_hm1 = document.getElementById("checkbox-0");
    const input_hm1 = document.getElementById("input-0");
    const checkbox_gl = document.getElementById("checkbox-1");
    const input_gl = document.getElementById("input-1");
    const checkbox_phy = document.getElementById("checkbox-2");
    const input_phy = document.getElementById("input-2");
    const checkbox_info1 = document.getElementById("checkbox-3");
    const input_info1 = document.getElementById("input-3");
    const checkbox_dig = document.getElementById("checkbox-4");
    const input_dig = document.getElementById("input-4");

    checkbox_hm1.addEventListener('change', prove_check);
    input_hm1.addEventListener("change", prove_check);
    checkbox_gl.addEventListener('change', prove_check);
    input_gl.addEventListener('change', prove_check);
    checkbox_phy.addEventListener('change', prove_check);
    input_phy.addEventListener('change', prove_check);
    checkbox_info1.addEventListener('change', prove_check);
    input_info1.addEventListener('change', prove_check);
    checkbox_dig.addEventListener('change', prove_check);
    input_dig.addEventListener('change', prove_check);

    //============ Semester 2. ============
    //====================================
    //====================================
    const checkbox_hm2 = document.getElementById("checkbox-5");
    const input_hm2 = document.getElementById("input-5");
    const checkbox_wsl = document.getElementById("checkbox-6");
    const input_wsl = document.getElementById("input-6");
    const checkbox_felder = document.getElementById("checkbox-7");
    const input_felder = document.getElementById("input-7");
    const checkbox_info2 = document.getElementById("checkbox-8");
    const input_info2 = document.getElementById("input-8");
    const checkbox_mc = document.getElementById('checkbox-9');
    const input_mc = document.getElementById("input-9");

    checkbox_hm2.addEventListener('change', prove_check);
    input_hm2.addEventListener('change', prove_check);
    checkbox_wsl.addEventListener('change', prove_check);
    input_wsl.addEventListener('change', prove_check);
    checkbox_felder.addEventListener('change', prove_check);
    input_felder.addEventListener('change', prove_check);
    checkbox_info2.addEventListener('change', prove_check);
    input_info2.addEventListener('change', prove_check);
    checkbox_mc.addEventListener('change', prove_check);
    input_mc.addEventListener('change', prove_check);

    //============ Semester 3. ============
    //====================================
    //====================================
    const checkbox_hm3 = document.getElementById("checkbox-10");
    const input_hm3 = document.getElementById("input-10");
    const checkbox_el = document.getElementById("checkbox-11");
    const input_el = document.getElementById("input-11");
    const checkbox_mess = document.getElementById("checkbox-12");
    const input_mess = document.getElementById("input-12");
    const checkbox_sys = document.getElementById("checkbox-13");
    const input_sys = document.getElementById("input-13");
    const checkbox_frmd = document.getElementById("checkbox-14");
    const input_frmd = document.getElementById("input-14");

    checkbox_hm3.addEventListener('change', prove_check);
    input_hm3.addEventListener('change', prove_check);
    checkbox_el.addEventListener('change', prove_check);
    input_el.addEventListener('change', prove_check);
    checkbox_mess.addEventListener('change', prove_check);
    input_mess.addEventListener('change', prove_check);
    checkbox_sys.addEventListener('change', prove_check);
    input_sys.addEventListener('change', prove_check);
    checkbox_frmd.addEventListener('change', prove_check);
    input_frmd.addEventListener('change', prove_check);

    //============ Semester 4. ============
    //====================================
    //====================================

    const checkbox_regl = document.getElementById("checkbox-15");
    const input_regl = document.getElementById("input-15");
    const checkbox_hf = document.getElementById("checkbox-16");
    const input_hf = document.getElementById("input-16");
    const checkbox_nt = document.getElementById("checkbox-17");
    const input_nt = document.getElementById("input-17");
    const checkbox_eds = document.getElementById("checkbox-18");
    const input_eds = document.getElementById("input-18");
    const checkbox_wahl1 = document.getElementById("checkbox-19");
    const input_wahl1 = document.getElementById("input-19");

    checkbox_regl.addEventListener('change', prove_check);
    input_regl.addEventListener("change", prove_check);
    checkbox_hf.addEventListener("change", prove_check);
    input_hf.addEventListener("change", prove_check);
    checkbox_nt.addEventListener('change', prove_check);
    input_nt.addEventListener('change', prove_check);
    checkbox_eds.addEventListener('change', prove_check);
    input_eds.addEventListener('change', prove_check);
    checkbox_wahl1.addEventListener('change', prove_check);
    input_wahl1.addEventListener('change', prove_check);

    //============ Semester 6. ============
    //====================================
    //==================================== 

    const checkbox_mdt = document.getElementById("checkbox-20");
    const input_mdt = document.getElementById("input-20");
    const checkbox_ads = document.getElementById("checkbox-21");
    const input_ads = document.getElementById("input-21");
    const checkbox_bild = document.getElementById("checkbox-22");
    const input_bild = document.getElementById("input-22");
    const checkbox_dsv = document.getElementById("checkbox-23");
    const input_dsv = document.getElementById("input-23");
    const checkbox_dsp = document.getElementById("checkbox-24");
    const input_dsp = document.getElementById("input-24");
    const checkbox_eas = document.getElementById("checkbox-25");
    const input_eas = document.getElementById("input-25");
    const checkbox_wahl2 = document.getElementById("checkbox-26");
    const input_wahl2 = document.getElementById("input-26");

    checkbox_mdt.addEventListener("change", prove_check);
    input_mdt.addEventListener("change", prove_check);
    checkbox_ads.addEventListener('change', prove_check);
    input_ads.addEventListener("change", prove_check);
    checkbox_bild.addEventListener("change", prove_check);
    input_bild.addEventListener("change", prove_check);
    checkbox_dsv.addEventListener("change", prove_check);
    input_dsv.addEventListener("change", prove_check);
    checkbox_dsp.addEventListener("change", prove_check);
    input_dsp.addEventListener("change", prove_check);
    checkbox_eas.addEventListener('change', prove_check);
    input_eas.addEventListener("change", prove_check);
    checkbox_wahl2.addEventListener("change", prove_check);
    input_wahl2.addEventListener("change", prove_check);

    //============ Semester 7. ============
    //====================================
    //==================================== 
    const checkbox_komm = document.getElementById("checkbox-27");
    const input_komm = document.getElementById("input-27");
    const checkbox_betr = document.getElementById("checkbox-28");
    const input_betr = document.getElementById("input-28");
    const checkbox_mit = document.getElementById("checkbox-29");
    const input_mit = document.getElementById("input-29");
    const checkbox_wiss = document.getElementById("checkbox-30");
    const input_wiss = document.getElementById("input-30");
    const checkbox_thesis = document.getElementById("checkbox-31");
    const input_thesis = document.getElementById("input-31");
    const checkbox_abss = document.getElementById("checkbox-32");
    const input_abss = document.getElementById("input-32");

    checkbox_komm.addEventListener("change", prove_check);
    input_komm.addEventListener("change", prove_check);
    checkbox_betr.addEventListener("change", prove_check);
    input_betr.addEventListener("change", prove_check);
    checkbox_mit.addEventListener("change", prove_check);
    input_mit.addEventListener("change", prove_check);
    checkbox_wiss.addEventListener("change", prove_check);
    input_wiss.addEventListener("change", prove_check);
    checkbox_thesis.addEventListener("change", prove_check);
    input_thesis.addEventListener("change", prove_check);
    checkbox_abss.addEventListener("change", prove_check);
    input_abss.addEventListener("change", prove_check);

});

