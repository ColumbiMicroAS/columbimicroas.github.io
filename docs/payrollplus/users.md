---
sidebar_position: 2
updated: 2026-03-02
---
# Brukere

## Opprette Bruker I Payroll+
Personer som skal ha tilgang kan selv opprette en bruker ved å trykke på **Registrer** på innloggingsiden eller klikke her:
https://payroll.netvision.no/register

![Payroll_Register Image](/img/docimages/payroll_plus/register-new-user.png)

Man vil få en epost hvor man må bekrefte sin epostadresse.

Ved første innlogging får man beskjed om å opprette 2fa (2 faktor autentisering) for å kunne ta i bruk tjenesten.
Dette kan eksempelvis gjøres ved å laste ned en app på telefonen som heter "Google Authenticator", men det er fritt valg av hvilken autentiseringsapp man vil bruke.

![Payroll_2FA_Activate_Image](/img/docimages/payroll_plus/2fa-activate.png)
Trykk på **Aktiver Tofaktor**.

![Payroll_2FA_Confirm_Image](/img/docimages/payroll_plus/2fa-activate-confirm.png)

Ved hjelp av din autentiseringsapp, skann QR-koden eller skriv inn koden som står under.
Du vil da få en 6-sifret kode som du må skrive inn for å bekrefte at du har satt opp 2fa.

![Payroll_2FA_Backup_Codes_Image](/img/docimages/payroll_plus/2fa-activate-backup-codes.png)

Disse backupkodene kan brukes dersom du ikke har tilgang til din autentiseringsapp.
Det er viktig å lagre disse kodene på et sikkert sted.

## Gi Tilgang Til Bruker

Når brukeren har opprettet seg og aktivert 2fa, må en administrator gi brukeren tilgang til selskapet.

![Payroll_Select_Client_Image](/img/docimages/payroll_plus/select-client.png)
Hvis du har tilgang til flere firmaer, velg det aktuelle firmaet øverst til høyre.

![Payroll_User_Admin_Image](/img/docimages/payroll_plus/user-admin.png)
- Trykk på **Brukere** i menyen til venstre.
- Trykk på **Legg til bruker**.
- Skriv inn epostadressen til brukeren
- Velg rolle
- Trykk **Legg til**.

### Roller
- **Administrator** - Har tilgang til å legge til og fjerne brukere for et selskap.
- **Bruker** - Har tilgang til å bruke modulene som selskapet har.

Dette vil bli utvidet senere til å kunne gi tilgang til enkelte moduler

:::info Oppdatert
{new Date(frontMatter.updated).toLocaleDateString('nb-NO', { year: 'numeric', month: '2-digit', day: '2-digit' })}
:::