---
sidebar_position: 1
---

# Payroll+ 

Netvision Payroll+ (NP+) er et system som er koblet / integrert med Visma.net Payroll som er ditt
lønnssystem. NP+ henter over alle ansatte med et enkelt tastetrykk og du kan legge opp et regelverk
for ansiennitet, trinn og intervaller. Systemet er utviklet med bakgrunn i modulen Lønnshåndtering
som var en tilvalgs modul til Huldt & Lillevik. Systemet er også tilrettelagt for å kunne importere K27-
rapport fra AltInn – det er en egen modul som bestilles særskilt.

## Forberedelser
Med forberedelser menes det som må gjøres i forkant av at systemet kan etableres og settes opp for
bruk. Dette utføres gjerne av en konsulent fra din partner eller systemansvarlig i din bedrift for
Visma.net. Du må ha roller Customer Admin for å kunne sjekke ut de punktene som beskrevet i dette
kapittelet. Disse forberedelsene gjelder for brukere som har enten Lønnshåndtering eller import av
K27 rapport.

### Akrivere Kudnes App Store
En Customer Administrator (forhandler eller kunden selv) må aktiverer tjenesten App Store i Visma.net
Admin på det aktuelle firmaet. Hvis App Store mangler kan det tyde på at lisensen er feil.

![Visma_App_Store Image](/img/docimages/visma-app-store.png)

### Tildele Brukerroller

Brukeren som skal godkjenne applikasjonen må ha rollen "Integration Administrator" for App Store
mot firmaet.

![Visma_User_Roles Image](/img/docimages/visma-user-roles.png)

### Godkjenne Applikasjonen
https://apps.visma.com/NO/app/isv_netvision_payroll

- Velg "Angi tillatelser"
- Payroll+ trenger tilgang til både "Read og Write Employees" – 2 «grønne knapper»
- Dersom skal ha benytte K27 modulen trenger du også tilgang til Payroll «"Read og Write» - total 8
«grønne knapper»
- Trykk "Integrer" og deretter "Aksepter".

Når dette er gjort vil leverandøren få en melding om dette på mail. Men praktisk også å sende
beskjed om hvilke(t) selskap som er registrert med lese- og skrivetillatelse i Visma.net

### Opprette Bruker I Payroll+
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

### Gi Tilgang Til Bruker

Når brukeren har opprettet seg og aktivert 2fa, må en administrator gi brukeren tilgang til selskapet.

![Payroll_Select_Client_Image](/img/docimages/payroll_plus/select-client.png)
Hvis du har tilgang til flere firmaer, velg det aktuelle firmaet øverst til høyre.

![Payroll_User_Admin_Image](/img/docimages/payroll_plus/user-admin.png)
- Trykk på **Brukere** i menyen til venstre.
- Trykk på **Legg til bruker**.
- Skriv inn epostadressen til brukeren 
- Velg rolle
- Trykk **Legg til**.

#### Roller
- **Administrator** - Har tilgang til å legge til og fjerne brukere for et selskap.
- **Bruker** - Har tilgang til å bruke modulene som selskapet har.

Dette vil bli utvidet senere til å kunne gi tilgang til enkelte moduler