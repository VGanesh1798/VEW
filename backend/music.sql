CREATE TABLE Label
(
	LabelName		varchar(50),
	Super			varchar(50),
	CEO				varchar(50),
	FoundingDate	int,
	
	PRIMARY KEY (LabelName)
);

CREATE TABLE Artist
(
	ID int,
	Name		varchar(50) NOT NULL,
	Year			int,
	Hometown	varchar(50),
	Style		varchar(50),
	Instrument	varchar(50),
	Disbanded	boolean,
	
	PRIMARY KEY (ID)
);

CREATE TABLE Releases
(
	ID				int REFERENCES Artist(ID),
	ReleaseName		varchar(50),
	Genre			varchar(50) NOT NULL,
	ReleaseType		varchar(50) NOT NULL,
	AvgRating		float,
	ReleaseYr		int NOT NULL,
	
	PRIMARY KEY (ReleaseName)
);

CREATE TABLE PutsOut
(
	LabelName		varchar(50),
	ReleaseName		varchar(50),
	ID				int,
	
	PRIMARY KEY (LabelName, ReleaseName, ID),
	FOREIGN KEY (LabelName) REFERENCES Label(LabelName),
	FOREIGN KEY (ReleaseName) REFERENCES Releases(ReleaseName),
	FOREIGN KEY (ID) REFERENCES Artist(ID)
);

CREATE TABLE ArtistAwards
(
	ID			int,
	AwardName	varchar(50),
	YearWon		int,
	
	PRIMARY KEY (ID, AwardName, YearWon),
	FOREIGN KEY (ID) REFERENCES Artist(ID)
);

CREATE TABLE Song
(
	ID				int REFERENCES Artist(ID),
	ReleaseName		varchar(50) REFERENCES Releases(ReleaseName),
	SongName		varchar(50),
	Genre			varchar(50) NOT NULL,
	SLength			float NOT NULL,
	Rating			float,
	ReleaseYear		int,
	
	PRIMARY KEY (SongName, ReleaseYear)
);

CREATE TABLE SongFeature
(
	ID				int REFERENCES Artist(ID),
	ReleaseName		varchar(50) REFERENCES Releases(ReleaseName),
	SongName		varchar(50),
	Feature			int REFERENCES Artist(ID),
	ReleaseYear		int,
	
	PRIMARY KEY (ID, ReleaseName, SongName, Feature, ReleaseYear),
	FOREIGN KEY (SongName, ReleaseYear) REFERENCES Song(SongName, ReleaseYear)
);

CREATE TABLE Users
(
	UserID		varchar(50),	
	Password 	varchar(50) NOT NULL,

	PRIMARY KEY (UserID)
);

CREATE TABLE Playlist
(
	UserID		varchar(50)  REFERENCES Users(UserID),
	PLTitle		varchar(50),
	Tag			varchar(50),
	PlLength	float NOT NULL,
	
	PRIMARY KEY (PLTitle)
);

CREATE TABLE Rates
(
	UserID		varchar(50),
	ReleaseName	varchar(50),
	ID			int,
	Rating		float,
	
	PRIMARY KEY (UserID, ReleaseName, ID),
	FOREIGN KEY (UserID) REFERENCES Users(UserID),
	FOREIGN KEY (ReleaseName) REFERENCES Releases(ReleaseName),
	FOREIGN KEY (ID) REFERENCES Artist(ID)
);

CREATE TABLE Includes
(
	PLTitle		varchar(50),
	UserID		varchar(50),
	SongName	varchar(50),
	ReleaseName varchar(50),
	ID			int,
	ReleaseYear int,
	
	PRIMARY KEY (PLTitle, UserID, SongName, ID, ReleaseYear),
	FOREIGN KEY (PLTitle) REFERENCES Playlist(PLTitle),
	FOREIGN KEY (UserID) REFERENCES Users(UserID),
	FOREIGN KEY (SongName, ReleaseYear) REFERENCES Song(SongName, ReleaseYear),
	FOREIGN KEY (ReleaseName) REFERENCES Releases(ReleaseName),
	FOREIGN KEY (ID) REFERENCES Artist(ID)
);

INSERT INTO artist VALUES (000001, 'Kanye West', 1977, 'Chicago, IL', 'Hip Hop', NULL, NULL);
INSERT INTO artist VALUES (000002, 'Kendrick Lamar', 1987, 'Compton. CA', 'Hip Hop', NULL, NULL);
INSERT INTO artist VALUES (000003, 'Travis Scott', 1992, 'Houston, TX', 'Hip Hop', NULL, NULL);
INSERT INTO artist VALUES (000004, 'Billie Eillish', 2001, 'Los Angeles, CA', 'Pop', NULL, NULL);
INSERT INTO artist VALUES (000005, 'Post Malone', 1995, 'Grapevine, TX', 'Pop', NULL, NULL);
INSERT INTO artist VALUES (000006, 'Ariana Grande', 1993, 'Boca Raton, FL', 'Pop', NULL, NULL);
INSERT INTO artist VALUES (000007, 'The Weeknd', 1990, 'Toronto, Ontario', 'R&B', NULL, NULL);
INSERT INTO artist VALUES (000008, 'Frank Ocean', 1987, 'New Orleans, LA', 'R&B', NULL, NULL);

INSERT INTO Artist VALUES (000009, 'Migos', 2008, 'Atlanta, GA', 'Hip Hop', NULL, NULL);


INSERT INTO Releases VALUES (000001, 'The College Dropout', 'Hip Hop', 'Album', NULL, 2004);
INSERT INTO Releases VALUES (000001, 'Late Registration', 'Hip Hop', 'Album', NULL, 2005);
INSERT INTO Releases VALUES (000001, 'Graduation', 'Hip Hop', 'Album', NULL, 2007);
INSERT INTO Releases VALUES (000001, '808s & Heartbreak', 'Hip Hop', 'Album', NULL, 2008);
INSERT INTO Releases VALUES (000001, 'My Beautiful Dark Twisted Fantasy', 'Hip Hop', 'Album', NULL, 2010);
INSERT INTO Releases VALUES (000001, 'Yeezus', 'Hip Hop', 'Album', NULL, 2013);
INSERT INTO Releases VALUES (000001, 'The Life Of Pablo', 'Hip Hop', 'Album', NULL, 2016);
INSERT INTO Releases VALUES (000001, 'Ye', 'Hip Hop', 'Album', NULL, 2018);
INSERT INTO Releases VALUES (000001, 'Kids See Ghosts', 'Hip Hop', 'Album', NULL, 2018);

INSERT INTO Releases VALUES (000002, 'Good Kid, M.A.A.D City', 'Hip Hop', 'Album', NULL, 2012);
INSERT INTO Releases VALUES (000002, 'DAMN.', 'Hip Hop', 'Album', NULL, 2017);

INSERT INTO Releases VALUES (000003, 'Rodeo', 'Hip Hop', 'Album', NULL, 2015);
INSERT INTO Releases VALUES (000003, 'Astroworld', 'Hip Hop', 'Album', NULL, 2018);

INSERT INTO Releases VALUES (000004, 'Don''t Smile at Me', 'Pop', 'EP', NULL, 2017);
INSERT INTO Releases VALUES (000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Pop', 'Album', NULL, 2019);

INSERT INTO Releases VALUES (000005, 'Stoney', 'Pop', 'Album', NULL, 2016);
INSERT INTO Releases VALUES (000005, 'Beerbongs & Bentleys', 'Pop', 'Album', NULL, 2018);

INSERT INTO Releases VALUES (000006, 'Sweetener', 'Pop', 'Album', NULL, 2018);
INSERT INTO Releases VALUES (000006, 'Thank U, Next', 'Pop', 'Album', NULL, 2019);

INSERT INTO Releases VALUES (000007, 'Beauty Behind the Madness', 'R&B', 'Album', NULL, 2015);
INSERT INTO Releases VALUES (000007, 'My Dear Melancholy', 'R&B', 'EP', NULL, 2018);

INSERT INTO Releases VALUES (000008, 'Channel Orange', 'R&B', 'Album', NULL, 2012);
INSERT INTO Releases VALUES (000008, 'Blonde', 'R&B', 'Album', NULL, 2016);

INSERT INTO Releases VALUES (000009, 'Culture', 'Hip Hop', 'Album', NULL, 2017);


INSERT INTO Label VALUES('Quality Control', NULL, 'Pierre ''Pee'' Thomas', 2013);
INSERT INTO Label VALUES('Def Jam Recordings', 'Universal Music Group', 'Paul Rosenberg', 1984);
INSERT INTO Label VALUES('Republic Records', 'Universal Music Group', 'Monte Lipman', 2006);
INSERT INTO Label VALUES('Grand Hustle Records', 'Warner Music Group', 'T.I.', 2003);
INSERT INTO Label VALUES('Top Dawg Entertainment', NULL, 'Anthony ''Top Dawg'' Tiffith', 2003);
INSERT INTO Label VALUES('Interscope Records', 'Universal Music Group', 'John Janick', 1989);


INSERT INTO PutsOut VALUES('Quality Control', 'Culture', 000009);

INSERT INTO PutsOut VALUES('Def Jam Recordings', 'Channel Orange', 000008);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'Blonde', 000008);

INSERT INTO PutsOut VALUES('Def Jam Recordings', 'The College Dropout', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'Late Registration', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'Graduation', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', '808s & Heartbreak', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'My Beautiful Dark Twisted Fantasy', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'Yeezus', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'The Life Of Pablo', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'Ye', 000001);
INSERT INTO PutsOut VALUES('Def Jam Recordings', 'Kids See Ghosts', 000001);

INSERT INTO PutsOut VALUES('Republic Records', 'Beauty Behind the Madness', 000007);
INSERT INTO PutsOut VALUES('Republic Records', 'My Dear Melancholy', 000007);

INSERT INTO PutsOut VALUES('Republic Records', 'Sweetener', 000006);
INSERT INTO PutsOut VALUES('Republic Records', 'Thank U, Next', 000006);

INSERT INTO PutsOut VALUES('Republic Records', 'Stoney', 000005);
INSERT INTO PutsOut VALUES('Republic Records', 'Beerbongs & Bentleys', 000005);

INSERT INTO PutsOut VALUES('Interscope Records', 'Don''t Smile at Me', 000004);
INSERT INTO PutsOut VALUES('Interscope Records', 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 000004);

INSERT INTO PutsOut VALUES('Grand Hustle Records', 'Rodeo', 000003);
INSERT INTO PutsOut VALUES('Grand Hustle Records', 'Astroworld', 000003);

INSERT INTO PutsOut VALUES('Top Dawg Entertainment', 'Good Kid, M.A.A.D City', 000002);
INSERT INTO PutsOut VALUES('Top Dawg Entertainment', 'DAMN.', 000002);


INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Album', 2005);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Album', 2006);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Album', 2008);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Album', 2012);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Song', 2005);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Song', 2006);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Song', 2008);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Song', 2010);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Song', 2012);
INSERT INTO ArtistAwards VALUES(000001, 'Grammy''s: Best Rap Song', 2013);

INSERT INTO ArtistAwards VALUES(000002, 'Grammy''s: Best Rap Album', 2016);
INSERT INTO ArtistAwards VALUES(000002, 'Grammy''s: Best Rap Album', 2018);
INSERT INTO ArtistAwards VALUES(000002, 'Grammy''s: Best Rap Song', 2015);
INSERT INTO ArtistAwards VALUES(000002, 'Grammy''s: Best Rap Song', 2016);
INSERT INTO ArtistAwards VALUES(000002, 'Grammy''s: Best Rap Song', 2018);

INSERT INTO ArtistAwards VALUES(000006, 'Grammy''s: Best Pop Vocal Album', 2019);

INSERT INTO ArtistAwards VALUES(000007, 'Grammy''s: Best Urban Contemporary Album', 2016);
INSERT INTO ArtistAwards VALUES(000007, 'Grammy''s: Best Urban Contemporary Album', 2018);

INSERT INTO ArtistAwards VALUES(000008, 'Grammy''s: Best Urban Contemporary Album', 2013);


INSERT INTO Song VALUES(000001, 'The College Dropout', 'Intro (Skit)', 'Hip Hop', 0.19, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'We Don''t Care', 'Hip Hop', 3.59, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Graduation Day', 'Hip Hop', 1.22, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'All Falls Down', 'Hip Hop', 3.43, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'I''ll Fly Away', 'Hip Hop', 1.09, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Spaceship', 'Hip Hop', 5.24, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Jesus Walks', 'Hip Hop', 3.13, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Never Let Me Down', 'Hip Hop', 5.24, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Get Em High', 'Hip Hop', 4.49, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Workout Plan', 'Hip Hop', .46, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'The New Workout Plan', 'Hip Hop', 5.22, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Slow Jamz', 'Hip Hop', 5.16, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Breathe In Breathe Out', 'Hip Hop', 4.06, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'School Spirit Skit 1', 'Hip Hop', 1.18, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'School Spirit', 'Hip Hop', 3.02, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'School Spirit Skit 2', 'Hip Hop', .43, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Lil Jimmy Skit', 'Hip Hop', .53, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Two Words', 'Hip Hop', 4.26, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Through The Wire', 'Hip Hop', 3.41, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Family Business', 'Hip Hop', 4.38, NULL, 2004);
INSERT INTO Song VALUES(000001, 'The College Dropout', 'Last Call', 'Hip Hop', 12.4, NULL, 2004);

INSERT INTO Song VALUES(000001, 'Late Registration', 'Wake Up Mr. West', 'Hip Hop', .41, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Heard ''Em Say', 'Hip Hop', 3.24, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Touch The Sky', 'Hip Hop', 3.56, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Gold Digger', 'Hip Hop', 3.27, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Skit #1', 'Hip Hop', .33, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Drive Slow', 'Hip Hop', 4.32, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'My Way Home', 'Hip Hop', 1.43, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Crack Music', 'Hip Hop', 4.31, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Roses', 'Hip Hop', 4.05, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Bring Me Down', 'Hip Hop', 3.19, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Addiction', 'Hip Hop', 4.27, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Skit #2', 'Hip Hop', .31, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Diamonds From Sierra Leone (Remix)', 'Hip Hop', 3.53, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'We Major', 'Hip Hop', 7.28, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Skit #3', 'Hip Hop', .24, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Hey Mama', 'Hip Hop', 5.05, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Celebration', 'Hip Hop', 3.18, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Skit #4', 'Hip Hop', 1.19, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Gone', 'Hip Hop', 5.33, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Diamonds From Sierra Leone', 'Hip Hop', 3.58, NULL, 2005);
INSERT INTO Song VALUES(000001, 'Late Registration', 'Late', 'Hip Hop', 3.5, NULL, 2005);

INSERT INTO Song VALUES(000001, 'Graduation', 'Good Morning', 'Hip Hop', 3.15, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Champion', 'Hip Hop', 2.47, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Stronger', 'Hip Hop', 5.12, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'I Wonder', 'Hip Hop', 4.03, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Good Life', 'Hip Hop', 3.27, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Can''t Tell Me Nothing', 'Hip Hop', 4.31, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Barry Bonds', 'Hip Hop', 3.24, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Drunk And Hot Girls', 'Hip Hop', 5.13, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Flashing Lights', 'Hip Hop', 3.57, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Everything I Am', 'Hip Hop', 3.47, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'The Glory', 'Hip Hop', 3.32, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Homecoming', 'Hip Hop', 3.23, NULL, 2007);
INSERT INTO Song VALUES(000001, 'Graduation', 'Big Brother', 'Hip Hop', 4.47, NULL, 2007);

INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Say You Will', 'Hip Hop', 6.18, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Welcome To Heartbreak', 'Hip Hop', 4.23, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Heartless', 'Hip Hop', 3.31, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Amazing', 'Hip Hop', 3.58, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Love Lockdown', 'Hip Hop', 4.31, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Paranoid', 'Hip Hop', 4.38, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'RoboCop', 'Hip Hop', 4.35, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Street Lights', 'Hip Hop', 3.10, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Bad News', 'Hip Hop', 3.59, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'See You In My Nightmares', 'Hip Hop', 4.18, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Coldest Winter', 'Hip Hop', 2.46, NULL, 2008);
INSERT INTO Song VALUES(000001, '808s & Heartbreak', 'Pinocchio Story (Live From Singapore)', 'Hip Hop', 6.02, NULL, 2008);

INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Dark Fantasy', 'Hip Hop', 4.4, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Gorgeous', 'Hip Hop', 5.57, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Power', 'Hip Hop', 4.52, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'All Of The Lights (Interlude)', 'Hip Hop', 1.02, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'All Of The Lights', 'Hip Hop', 4.59, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Monster', 'Hip Hop', 6.18, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'So Appalled', 'Hip Hop', 6.38, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Devil In A New Dress', 'Hip Hop', 5.52, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Runaway', 'Hip Hop', 9.08, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Hell Of A Life', 'Hip Hop', 5.27, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Blame Game', 'Hip Hop', 7.49, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Lost In The World', 'Hip Hop', 4.16, NULL, 2010);
INSERT INTO Song VALUES(000001, 'My Beautiful Dark Twisted Fantasy', 'Who Will Survive In America', 'Hip Hop', 1.38, NULL, 2010);

INSERT INTO Song VALUES(000001, 'Yeezus', 'On Sight', 'Hip Hop', 2.63, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'Black Skinhead', 'Hip Hop', 3.08, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'I Am A God', 'Hip Hop', 3.51, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'New Slaves', 'Hip Hop', 4.16, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'Hold My Liquor', 'Hip Hop', 5.26, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'I''m In It', 'Hip Hop', 3.54, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'Blood On The Leaves', 'Hip Hop', 6.00, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'Guilt Trip', 'Hip Hop', 4.03, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'Send It Up', 'Hip Hop', 2.58, NULL, 2013);
INSERT INTO Song VALUES(000001, 'Yeezus', 'Bound 2', 'Hip Hop', 3.49, NULL, 2013);

INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Ultralight Beam', 'Hip Hop', 5.2, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Father Stretch My Hands, Pt. 1', 'Hip Hop', 2.15, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Pt. 2', 'Hip Hop', 2.10, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Famous', 'Hip Hop', 3.16, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Feedback', 'Hip Hop', 2.27, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Low Lights', 'Hip Hop', 2.11, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Highlights', 'Hip Hop', 3.19, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Freestyle 4', 'Hip Hop', 2.03, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'I Love Kanye', 'Hip Hop', .44, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Waves', 'Hip Hop', 3.01, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'FML', 'Hip Hop', 3.56, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Real Friends', 'Hip Hop', 4.11, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Wolves', 'Hip Hop', 5.01, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Frank''s Track', 'Hip Hop', .38, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Siiiiiiiiilver Surffffeeeeer Intermission', 'Hip Hop', .56, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', '30 Hours', 'Hip Hop', 5.23, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'No More Parties in LA', 'Hip Hop', 6.14, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Facts (Charlie Heat Version)', 'Hip Hop', 3.20, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Fade', 'Hip Hop', 3.13, NULL, 2016);
INSERT INTO Song VALUES(000001, 'The Life Of Pablo', 'Saint Pablo', 'Hip Hop', 6.12, NULL, 2016);

INSERT INTO Song VALUES(000001, 'Ye', 'I Thought About Killing You', 'Hip Hop', 4.34, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Ye', 'Yikes', 'Hip Hop', 3.08, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Ye', 'All Mine', 'Hip Hop', 2.25, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Ye', 'Wouldn''t Leave', 'Hip Hop', 3.25, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Ye', 'No Mistakes', 'Hip Hop', 2.03, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Ye', 'Ghost Town', 'Hip Hop', 4.31, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Ye', 'Violent Crimes', 'Hip Hop', 3.35, NULL, 2018);

INSERT INTO Song VALUES(000001, 'Kids See Ghosts', 'Feel the Love', 'Hip Hop', 2.45, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Kids See Ghosts', 'Fire', 'Hip Hop', 2.20, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Kids See Ghosts', '4th Dimension', 'Hip Hop', 2.33, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Kids See Ghosts', 'Freeee (Ghost Town, Pt. 2)', 'Hip Hop', 3.26, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Kids See Ghosts', 	'Reborn', 'Hip Hop', 5.24, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Kids See Ghosts', 'Kids See Ghosts', 'Hip Hop', 4.05, NULL, 2018);
INSERT INTO Song VALUES(000001, 'Kids See Ghosts', 'Cudi Montage', 'Hip Hop', 3.17, NULL, 2018);

INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Sherane a.k.a Master Splinter''s Daughter', 'Hip Hop', 4.33, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Bitch, Don''t Kill My Vibe', 'Hip Hop', 5.10, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Backseat Freestyle', 'Hip Hop', 3.32, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'The Art of Peer Pressure', 'Hip Hop', 5.24, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Money Trees', 'Hip Hop', 6.26, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Poetic Justice', 'Hip Hop', 5.00, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Good Kid', 'Hip Hop', 3.34, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'M.A.A.D City', 'Hip Hop', 5.50, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Swimming Pools (Drank)', 'Hip Hop', 5.13, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Sing About Me, I''m Dying of Thirst', 'Hip Hop', 12.03, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Real', 'Hip Hop', 7.23, NULL, 2012);
INSERT INTO Song VALUES(000002, 'Good Kid, M.A.A.D City', 'Compton', 'Hip Hop', 4.08, NULL, 2012);

INSERT INTO Song VALUES(000002, 'DAMN.', 'Blood', 'Hip Hop', 1.58, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'DNA', 'Hip Hop', 3.05, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Yah', 'Hip Hop', 2.40, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Element', 'Hip Hop', 3.28, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Feel', 'Hip Hop', 3.34, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Loyalty', 'Hip Hop', 3.47, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Pride', 'Hip Hop', 4.35, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Humble', 'Hip Hop', 2.57, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Lust', 'Hip Hop', 5.07, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Love', 'Hip Hop', 3.33, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'XXX', 'Hip Hop', 4.14, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Fear', 'Hip Hop', 7.40, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'God', 'Hip Hop', 4.08, NULL, 2017);
INSERT INTO Song VALUES(000002, 'DAMN.', 'Duckworth', 'Hip Hop', 4.08, NULL, 2017);

INSERT INTO Song VALUES(000003, 'Rodeo', 'Pornography', 'Hip Hop', 3.51, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Oh My Dis Side', 'Hip Hop', 5.51, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', '3500', 'Hip Hop', 7.41, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Wasted', 'Hip Hop', 3.55, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', '90210', 'Hip Hop', 5.39, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Pray 4 Love', 'Hip Hop', 5.07, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Nightcrawler', 'Hip Hop', 5.21, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Piss on Your Grave', 'Hip Hop', 2.46, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Antidote', 'Hip Hop', 4.22, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Impossible', 'Hip Hop', 4.02, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Maria I''m Drunk', 'Hip Hop', 5.49, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Flying High', 'Hip Hop', 3.28, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'I Can Tell', 'Hip Hop', 3.55, NULL, 2015);
INSERT INTO Song VALUES(000003, 'Rodeo', 'Apple Pie', 'Hip Hop', 3.39, NULL, 2015);

INSERT INTO Song VALUES(000003, 'Astroworld', 'Stargazing', 'Hip Hop', 4.31, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Carousel', 'Hip Hop', 3.00, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Sicko Mode', 'Hip Hop', 5.12, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'R.I.P. Screw', 'Hip Hop', 3.05, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Stop Trying to Be God', 'Hip Hop', 5.38, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'No Bystanders', 'Hip Hop', 3.38, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Skeletons', 'Hip Hop', 2.25, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Wake Up', 'Hip Hop', 3.52, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', '5% Tint', 'Hip Hop', 3.16, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'NC-17', 'Hip Hop', 2.37, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Astrothunder', 'Hip Hop', 2.23, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Yosemite', 'Hip Hop', 2.30, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Can''t Say', 'Hip Hop', 3.18, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Who? What!', 'Hip Hop', 2.56, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Butterfly Effect', 'Hip Hop', 3.11, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Houstonfornication', 'Hip Hop', 3.38, NULL, 2018);
INSERT INTO Song VALUES(000003, 'Astroworld', 'Coffee Bean', 'Hip Hop', 3.29, NULL, 2018);

INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'Copycat', 'Pop', 3.13, NULL, 2017);
INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'Idontwannabeyouanymore', 'Pop', 3.23, NULL, 2017);
INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'My Boy', 'Pop', 2.50, NULL, 2017);
INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'Watch', 'Pop', 2.58, NULL, 2017);
INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'Party Favor', 'Pop', 3.24, NULL, 2017);
INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'Bellyache', 'Pop', 3.00, NULL, 2017);
INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'Ocean Eyes', 'Pop', 3.20, NULL, 2017);
INSERT INTO Song VALUES(000004, 'Don''t Smile at Me', 'Hostage', 'Pop', 3.49, NULL, 2017);

INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', '!!!!!!!', 'Pop', .14, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Bad Guy', 'Pop', 3.14, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Xanny', 'Pop', 4.04, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'You Should See Me in a Crown', 'Pop', 3.01, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'All the Good Girls Go to Hell', 'Pop', 2.49, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Wish You Were Gay', 'Pop', 3.42, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'When the Party''s Over', 'Pop', 3.16, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', '8', 'Pop', 2.53, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'My Strange Addiction', 'Pop', 3.00, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Bury a Friend', 'Pop', 3.13, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Ilomilo', 'Pop', 2.36, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Listen Before I Go', 'Pop', 4.03, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'I Love You', 'Pop', 4.52, NULL, 2019);
INSERT INTO Song VALUES(000004, 'WHEN WE ALL FALL ASLEEP WHERE DO WE GO?', 'Goodbye', 'Pop', 1.59, NULL, 2019);

INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Imagine', 'Pop', 3.32, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Needy', 'Pop', 2.51, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'NASA', 'Pop', 3.02, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Bloodline', 'Pop', 3.36, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Fake Smile', 'Pop', 3.28, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Bad Idea', 'Pop', 4.27, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Make Up', 'Pop', 2.20, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Ghostin', 'Pop', 4.31, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'In My Head', 'Pop', 3.42, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', '7 Rings', 'Pop', 2.58, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Thank U, Next', 'Pop', 3.27, NULL, 2019);
INSERT INTO Song VALUES(000006, 'Thank U, Next', 'Break Up with Your Girlfriend, I''m Bored', 'Pop', 3.10, NULL, 2019);

INSERT INTO Song VALUES(000006, 'Sweetener', 'Raindrops (An Angel Cried)', 'Pop', .37, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Blazed', 'Pop', 3.16, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'The Light Is Coming', 'Pop', 3.48, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'R.E.M', 'Pop', 4.05, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'God Is a Woman', 'Pop', 3.17, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Sweetener', 'Pop', 3.28, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Successful', 'Pop', 3.47, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Everytime', 'Pop', 2.52, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Breathin', 'Pop', 3.18, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'No Tears Left to Cry', 'Pop', 3.25, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Borderline', 'Pop', 2.57, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Better Off', 'Pop', 2.51, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Goodnight n Go', 'Pop', 3.09, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Pete Davidson', 'Pop', 1.13, NULL, 2018);
INSERT INTO Song VALUES(000006, 'Sweetener', 'Get Well Soon', 'Pop', 5.22, NULL, 2018);

INSERT INTO Song VALUES(000005, 'Stoney', 'Broken Whiskey Glass', 'Pop', 3.53, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Big Lie', 'Pop', 3.27, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Deja Vu', 'Pop', 3.54, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'No Option', 'Pop', 2.59, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Cold', 'Pop', 4.28, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'White Iverson', 'Pop', 4.16, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'I Fall Apart', 'Pop', 3.43, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Patient', 'Pop', 3.14, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Go Flex', 'Pop', 2.59, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Feel', 'Pop', 3.17, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Too Young', 'Pop', 3.57, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Congratulations', 'Pop', 3.40, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Up There', 'Pop', 3.14, NULL, 2016);
INSERT INTO Song VALUES(000005, 'Stoney', 'Yours Truly, Austin Post', 'Pop', 3.39, NULL, 2016);

INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Paranoid', 'Pop', 3.44, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Spoil My Night', 'Pop', 3.14, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Rich & Sad', 'Pop', 3.23, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Zack and Codeine', 'Pop', 3.23, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Takin'' Shots', 'Pop', 3.37, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Rockstar', 'Pop', 3.39, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Over Now', 'Pop', 4.07, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Psycho', 'Pop', 3.41, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Better Now', 'Pop', 3.50, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Ball for Me', 'Pop', 3.27, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Otherside', 'Pop', 3.48, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Stay', 'Pop', 3.28, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Blame It on Me', 'Pop', 4.22, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Same Bitches', 'Pop', 3.31, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Jonestown', 'Pop', 1.51, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', '92 Explorer', 'Pop', 3.32, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Candy Paint', 'Pop', 3.49, NULL, 2018);
INSERT INTO Song VALUES(000005, 'Beerbongs & Bentleys', 'Sugar Wraith', 'Pop', 3.47, NULL, 2018);

INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Real Life', 'R&B', 3.43, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Losers', 'R&B', 4.41, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Tell Your Friends', 'R&B', 5.34, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Often', 'R&B', 4.09, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'The Hills', 'R&B', 4.02, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Acquainted', 'R&B', 5.48, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Can''t Feel My Face', 'R&B', 3.33, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Shameless', 'R&B', 4.13, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Earned It (Fifty Shades of Grey)', 'R&B', 4.37, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'In the Night', 'R&B', 3.55, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'As You Are', 'R&B', 5.40, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Dark Times', 'R&B', 4.20, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Prisoner', 'R&B', 4.34, NULL, 2015);
INSERT INTO Song VALUES(000007, 'Beauty Behind the Madness', 'Angel', 'R&B', 6.17, NULL, 2015);

INSERT INTO Song VALUES(000007, 'My Dear Melancholy', 'Call Out My Name', 'R&B', 3.48, NULL, 2018);
INSERT INTO Song VALUES(000007, 'My Dear Melancholy', 'Try Me', 'R&B', 3.41, NULL, 2018);
INSERT INTO Song VALUES(000007, 'My Dear Melancholy', 'Wasted Times', 'R&B', 3.40, NULL, 2018);
INSERT INTO Song VALUES(000007, 'My Dear Melancholy', 'I Was Never There', 'R&B', 4.01, NULL, 2018);
INSERT INTO Song VALUES(000007, 'My Dear Melancholy', 'Hurt You', 'R&B', 3.50, NULL, 2018);
INSERT INTO Song VALUES(000007, 'My Dear Melancholy', 'Privilege', 'R&B', 2.50, NULL, 2018);

INSERT INTO Song VALUES(000008, 'Channel Orange', 'Start', 'R&B', .45, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Thinkin Bout You', 'R&B', 3.20, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Fertilizer', 'R&B', .39, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Sierra Leone', 'R&B', 2.28, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Sweet Life', 'R&B', 4.22, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Not Just Money', 'R&B', .59, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Super Rich Kids', 'R&B', 5.04, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Pilot Jones', 'R&B', 3.04, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Crack Rock', 'R&B', 3.44, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Pyramids', 'R&B', 9.52, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Lost', 'R&B', 3.54, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'White', 'R&B', 1.16, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Monks', 'R&B', 3.20, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Bad Religion', 'R&B', 2.55, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Pink Matter', 'R&B', 4.28, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'Forrest Gump', 'R&B', 3.14, NULL, 2012);
INSERT INTO Song VALUES(000008, 'Channel Orange', 'End', 'R&B', 2.14, NULL, 2012);

INSERT INTO Song VALUES(000008, 'Blonde', 'Nikes', 'R&B', 5.14, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Ivy', 'R&B', 4.09, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Pink + White', 'R&B', 3.04, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Be Yourself', 'R&B', 1.26, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'artist', 'R&B', 4.17, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Skyline To', 'R&B', 3.04, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Self Control', 'R&B', 4.09, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Good Guy', 'R&B', 1.06, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Nights', 'R&B', 5.07, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'artist (Reprise)', 'R&B', 1.18, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Pretty Sweet', 'R&B', 2.37, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Facebook Story', 'R&B', 1.08, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Close to You', 'R&B', 1.25, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'White Ferrari', 'R&B', 4.08, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Seigfried', 'R&B', 5.34, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Godspeed', 'R&B', 2.57, NULL, 2016);
INSERT INTO Song VALUES(000008, 'Blonde', 'Futura Free', 'R&B', 9.24, NULL, 2016);

INSERT INTO Song VALUES(000009, 'Culture', 'Culture', 'Hip Hop', 2.33, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'T-Shirt', 'Hip Hop', 4.02, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Call Casting', 'Hip Hop', 3.52, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Bad and Boujee', 'Hip Hop', 5.43, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Get Right Witcha', 'Hip Hop', 4.17, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Slippery', 'Hip Hop', 5.04, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Big on Big', 'Hip Hop', 4.50, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'What the Price', 'Hip Hop', 4.08, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Brown Paper Bag', 'Hip Hop', 3.31, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Deadz', 'Hip Hop', 4.34, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'All Ass', 'Hip Hop', 4.54, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Kelly Price', 'Hip Hop', 6.03, NULL, 2017);
INSERT INTO Song VALUES(000009, 'Culture', 'Out Yo Way', 'Hip Hop', 4.48, NULL, 2017);

INSERT INTO SongFeature VALUES(000009, 'Culture', 'Kelly Price', 000003, 2017);
INSERT INTO SongFeature VALUES(000003, 'Astroworld', 'Who? What!', 000009, 2018);
INSERT INTO SongFeature VALUES(000003, 'Astroworld', 'Carousel', 000008, 2018);
INSERT INTO SongFeature VALUES(000003, 'Astroworld', 'Skeletons', 000007, 2018);
INSERT INTO SongFeature VALUES(000003, 'Astroworld', 'Wake Up', 000007, 2018);
INSERT INTO SongFeature VALUES(000003, 'Rodeo', 'Pray 4 Love', 000007, 2015);
INSERT INTO SongFeature VALUES(000003, 'Rodeo', 'Piss on Your Grave', 000001, 2015);
INSERT INTO SongFeature VALUES(000001, 'The Life Of Pablo', 'No More Parties in LA', 000002, 2016);



INSERT INTO Users VALUES('Eli', '12345');

INSERT INTO Playlist VALUES('Eli', '1', 'FIRE', 0.0);

INSERT INTO Rates VALUES('Eli', 'Rodeo', 000003, 5.0);

INSERT INTO Includes VALUES('1', 'Eli', '90210', 'Rodeo', 000003, 2015);
INSERT INTO Includes VALUES('1', 'Eli', 'Nights', 'Blonde', 000008, 2016);
INSERT INTO Includes VALUES('1', 'Eli', 'Pyramids', 'Channel Orange', 000008, 2012);
INSERT INTO Includes VALUES('1', 'Eli', 'Ghost Town', 'Ye', 000001, 2018);