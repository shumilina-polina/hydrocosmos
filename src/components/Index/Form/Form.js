import Wrapper from "@/shared/UI/Wrapper";
import s from "./form.module.scss";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  TextareaAutosize,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Form = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");

  return (
    <section className={s.wr}>
      <Wrapper>
        <header>
          <h2>{t("home.form.title")}</h2>
          <hr />
        </header>
        <main>
          <form className={s.form} id="contactForm">
            <FormControl>
              <InputLabel htmlFor="fio-input">{t("home.form.fio")}</InputLabel>
              <Input
                inputProps={{
                  maxLength: 40,
                  name: "name",
                  required: true,
                  type: "text",
                }}
                id="fio-input"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="post-input">
                {t("home.form.post")}
              </InputLabel>
              <Input
                inputProps={{
                  maxLength: 60,
                  name: "post",
                  required: true,
                  type: "text",
                }}
                id="post-input"
              />
            </FormControl>
            <FormControl className={"input-phone"}>
              <InputLabel htmlFor="phone-input">
                {t("home.form.phone")}
              </InputLabel>
              <Input
                inputProps={{
                  maxLength: 20,
                  pattern: ".{16}",
                  name: "phone",
                  required: true,
                  type: "tel",
                  placeholder: "+7 (___)___-__-__",
                }}
                id="phone-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={() => {
                  const num = phone.replace(/\D/g, "");
                  setPhone(
                    num.length > 3
                      ? num.substring(0, 1) +
                          " (" +
                          num.substring(1, 4) +
                          ") " +
                          num.substring(4, 7) +
                          "-" +
                          num.substring(7, 11)
                      : num
                  );
                }}
              />
            </FormControl>
            <FormControl>
              <TextareaAutosize
                required={true}
                name="text"
                placeholder={t("home.form.offer")}
                maxLength={2000}
              />
            </FormControl>
            <FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    inputProps={{
                      required: true,
                    }}
                    sx={{
                      color: "#8BE1F4",
                      "&.Mui-checked": {
                        color: "#8BE1F4",
                      },
                    }}
                  />
                }
                label={t("home.form.policy")}
              />
            </FormControl>
            <button type="submit">
              {t("home.form.button")} <span>-&gt;</span>
            </button>
          </form>
        </main>
      </Wrapper>
    </section>
  );
};

export default Form;
