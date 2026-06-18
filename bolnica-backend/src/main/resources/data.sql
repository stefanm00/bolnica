-----------bolnica -----------------------------------------------------

INSERT INTO bolnica(id, naziv, adresa, budzet)
VALUES
(1, 'Klinicki centar Vojvodine', 'Novi Sad', 5000000),
(2, 'Opsta bolnica Nis', 'Nis', 3000000),
(3, 'Institut Kamenica', 'Sremska Kamenica', 4200000),
(4, 'VMA', 'Beograd', 9000000),
(5, 'Bolnica Sveti Sava', 'Beograd', 2800000),
(6, 'Opsta bolnica Subotica', 'Subotica', 2400000),
(7, 'Opsta bolnica Leskovac', 'Leskovac', 1700000),
(8, 'Institut za onkologiju Srbije', 'Beograd', 7600000),
(9, 'Opsta bolnica Novi Pazar', 'Novi Pazar', 1900000),
(10, 'Opsta bolnica Zrenjanin', 'Zrenjanin', 3500000);

----------- dijagnoza -----------------------------------------------------

INSERT INTO dijagnoza(id, naziv, opis, oznaka)
VALUES
(1, 'Hipertenzija', 'Povisen krvni pritisak', 'I10'),
(2, 'Dijabetes', 'Poremecaj nivoa secera u krvi', 'E11'),
(3, 'Bronhitis', 'Upala disajnih puteva', 'J20'),
(4, 'Migrena', 'Hronicna glavobolja', 'G43'),
(5, 'Astma', 'Hronicna bolest disajnih puteva', 'J45'),
(6, 'Anemija', 'Smanjen broj eritrocita', 'D64'),
(7, 'Aritmija', 'Nepravilan rad srca', 'I49'),
(8, 'Gastritis', 'Upala zeluca', 'K29'),
(9, 'Depresija', 'Poremecaj raspolozenja', 'F32'),
(10, 'Insomnija', 'Poremecaj spavanja', 'G47');

----------- odeljenje -----------------------------------------------------

INSERT INTO odeljenje(id, naziv, lokacija, bolnica_id)
VALUES
(1, 'Kardiologija', 'Prvi sprat', 1),
(2, 'Endokrinologija', 'Drugi sprat', 1),
(3, 'Pulmologija', 'Prizemlje', 2),
(4, 'Neurologija', 'Treci sprat', 4),
(5, 'Ortopedija', 'Drugi sprat', 6),
(6, 'Onkologija', 'Cetvrti sprat', 8),
(7, 'Psihijatrija', 'Peti sprat', 5),
(8, 'Gastroenterologija', 'Prizemlje', 3),
(9, 'Urgentni centar', 'Prizemlje', 4),
(10, 'Rehabilitacija', 'Drugi objekat', 7);

----------- pacijent -----------------------------------------------------

INSERT INTO pacijent(id, ime, prezime, zdr_osiguranje, datum_rodjenja, odeljenje_id, dijagnoza_id)
VALUES
(1, 'Marko', 'Markovic', true, '1999-05-10', 1, 1),
(2, 'Ana', 'Jovanovic', true, '2001-03-15', 2, 2),
(3, 'Petar', 'Petrovic', false, '1988-11-22', 3, 3),
(4, 'Nikola', 'Simic', true, '1995-08-12', 4, 4),
(5, 'Milica', 'Nikolic', true, '2000-01-21', 5, 6),
(6, 'Stefan', 'Maksimovic', false, '1987-07-30', 6, 5),
(7, 'Jelena', 'Todorovic', true, '1993-02-17', 7, 9),
(8, 'Luka', 'Vasiljevic', false, '1979-10-05', 8, 8),
(9, 'Teodora', 'Savic', true, '2004-04-14', 9, 7),
(10, 'Andrej', 'Kovacevic', true, '1998-12-01', 10, 10);


ALTER SEQUENCE bolnica_seq RESTART WITH 11;
ALTER SEQUENCE dijagnoza_seq RESTART WITH 11;
ALTER SEQUENCE odeljenje_seq RESTART WITH 11;
ALTER SEQUENCE pacijent_seq RESTART WITH 11;