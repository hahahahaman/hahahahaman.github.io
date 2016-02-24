---
layout: post
title: Confused Why Women Don’t Report Sexual Assault? Ask Kesha?
---

[Huffington Post](http://www.huffingtonpost.com/entry/kesha-sexual-assault-why-women-dont-come-forward_us_56c77579e4b0928f5a6bcd51)
has written an article that attempts to illuminate the failings of the criminal
justice system in handling rape and sexual assault cases. The article cites many
different sources to back up its claims. Do these references validate these
claims of a failed legal system? I hope you follow along and review these
citations as well. Just for the lazy I'll be a bit more verbose by rewriting
portions of the data tables.

> Kesha is a wealthy, beautiful, white celebrity working at the upper echelons
> of an elite industry. Yet, even these privileges don't set her apart from
> other victims of sexual abuse who
> [face a justice system that often doesn't protect them](http://rhrealitycheck.org/article/2016/01/08/victims-rape-sexual-assault-failed-criminal-justice-system-increasingly-seek-civil-remedies/).
> Her story sheds light on why rape remains one of the most grossly
> [underreported crimes](https://www.rainn.org/get-information/statistics/reporting-rates).

This paragraph seems to highlight the main arguments being made in the article;
the first claim is that the justice system often doesn't protect victims of
sexual abuse and references this article,
["Victims of Rape and Sexual Assault, Failed by Criminal Justice System, Increasingly Seek Civil Remedies"](http://rhrealitycheck.org/article/2016/01/08/victims-rape-sexual-assault-failed-criminal-justice-system-increasingly-seek-civil-remedies/).
The second claim is that rape remains one of the most grossly underreported
crimes citing,
"[Reporting Rates](https://www.rainn.org/get-information/statistics/reporting-rates)",
from the Rape, Abuse and Incest National Network (RAINN), which make several
claims, including, "only about 2% of rapists will ever serve a day in prison."

>"**Why Will Only 2 Out of Every 100 Rapists Serve Time?**"
> ![Rapist infographic](./data/rape/jailed-rapists2014.jpg)

As you can see, each of these data bars has a reference :

 * The first data bar that says, "out of every 100 rapes, 32 get reported to
   police", references the Bureau of Justice Statistics' (BJS) National Crime
   Victimization Surveys (NCVS) from 2008-2012.
 * The second saying "out of every 100 rapes, 7 lead to an arrest" references
   The FBI Uniform Crime Reports, Arrest Data: 2006-2010
 * The third references FBI, Uniform Crime Reports, Offenses Cleared Data: 2006-2010.
 * The fourth and fifth references Department of Justice, Felony Defendents in
   Large Urban Counties: 2009.

Then that data is used to come to the conclusion that "the other 98 [rapists]
will walk free". These sources are publicly available and I will be looking at
these different references.

## Rape is grossly underreported?

I will look at the Bureau of Justice Statistics'
[2014 National Crime Victimization Survey](http://www.bjs.gov/content/pub/pdf/cv14.pdf)
to see if the claim that "rape is grossly underreported" is a reasonable claim.
I will also be using the
[NCVS Victimization Analysis Tool (NVAT)][ncvs-trend-tool], because it easily
compiles their data in CSV format and the
[FBI Uniform Crime Reports (UCR)][fbi-ucr].

[Page 2][ncvs2] of the 2014 NCVS introduces victimizations, saying :

>"Victimization is the basic unit of analysis used throughout most of this
>report. A victimization is a crime as it affects one person or household. For
>personal crimes, the number of victimizations is equal to the number of victims
>present during a criminal incident. The number of victimizations may be greater
>than the number of incidents because more than one person may be victimized
>during an incident. Each crime against a household is counted as having a
>single victim—the affected household."

(Note: I have interpreted this survey data to say that violent crime is composed
of rape/sexual assault, robbery, and assault (which is divided into aggravated
assault and simple assault). The types: domestic violence, stranger violence,
and violent crime involving injury, are a different description of violent crime
that can include any of the previous types of violent crime. Serious violent
crime is a subset of violent crime, encompassing "rape or sexual assault,
robbery, and aggravated assault". Serious violent crime is then divided into
different types in the data tables.)

Looking at [page 7, table 6][ncvs7] of the survey :

##### Percent of victimizations reported to police, by type of crime, 2014

* Rape and sexual assault :   33.6%
* Robbery                 :   60.9%
* Aggravated Assault      :   58.4%
* Simple Assault          :   40.0%

* Total Violent Crime Average : 46.0%

![nvat-percent-reported-2014](./data/rape/NVAT-data/percent-reported-2014.png)

Previous years appear to be around this percentage for rape and sexual assault.

This reporting rate is lower than any other form of violent crime. Theft is the
only other form of crime in this survey that has a lower report percentage of
29.0% for 2014. The classification of violent crimes, has an average of 46.0% of
victimizations reported to police for 2014 and the classification of property
crime has an average report percentage of 37.0%. 

### Case solved? 

Rape and sexual assault is underreported, when looking at the
reports per victimization ratio of rape and sexual assault and comparing that to
the report per victimization ratio of other violent crimes. But, rape and sexual
assault has the lowest number of estimated annual victimizations of any crime in
the survey as shown on [page 2, table 1][ncvs2] for violent crime and
[page 3, table 3 for property victimizations][ncvs3]:

##### Violent victimization, by type of violent crime, 2014

* Rape and sexual assault : 284,350
* Robbery : 664,210
* Aggravated assault : 1,092,090
* Simple assault : 3,318,920

* Total Violent Crime : 5,359,570
* Total Serious Violent Crime : 2,040,650


![victimizations-2014](./data/rape/NVAT-data/victimizations-2014.png)

These estimates also show that rape and sexual assault accounts for ~13.9% of
serious violent crime victimizations.

Here I'll look at the number of reported and unreported victimizations
of violent crimes by using the data from
[page 2, table 1, "Violent victimizations"][ncvs2], and [page 7, table 6, "Percent of
victimizations reported to police, by type of crime"][ncvs7] (similar data can
also be found using NVAT) :

{% highlight js %}
let r be decimal percentage of reported victimizations
let v be victimizations
let n_r be number of reported victimizations
let n_u be number of unreported victimizations

--------------------------------------------
Reported victimizations to police 2014

equation
r * v = n_r

Rape and sexual assault
0.336 * 284,350   =   95,541.6 

Robbery
0.609 * 664,210   =   404,503.9

Aggravated assault
0.584 * 1,092,090 =   637,780.56

Simple assault
0.400 * 3,318,920 =   1,327,568.0

--------------------------------------------
Unreported victimizations 2014

equation
(1.0 - r) * v = n_u

Rape and sexual assault
(1.0 - 0.336) * 284,350   =   188,808.4 

Robbery
(1.0 - 0.609) * 664,210   =   259,706.1

Aggravated assault
(1.0 - 0.584) * 1,092,090 =   454,309.44

Simple assault
(1.0 - 0.400) * 3,318,920 =   1,991,352.1

{% endhighlight %}

These calculations show that rape and sexual assault has the lowest number of
victimizations reported to police and the lowest number of unreported
victimizations.

![reported-unreported-2014](./data/rape/NVAT-data/reported-unreported-2014.png)

### Is it fair to compare the number of unreported victimizations, rather than compare the percentage of unreported victimizations? 

The claim that rape and sexual assault is **grossly** underreported didn't even
compare its report rate to other crimes; there was no context to what was an
underreported, over reported, and averagely reported crime. Looking at the
number of reported and unreported victimizations gives context to the societal
trends of reporting crime to the police and gives information on how prevalent
each crime is in society. Including the numbers gives a broader picture of the
effect of different crimes in the society, rather than trying to impress upon
people, that, because something has a certain number, it means society is ill.
Rape and sexual assault has the least reported and unreported victimizations and
the least number of victimizations of any violent crime in the NCVS.

### Why is the number of rape and sexual assault victimizations low in comparison to other violent crimes if "[Rape Culture is Real](http://time.com/40110/rape-culture-is-real/)"?

>"[Nearly 1 in 5 women (18.3%) and 1 in 71 men (1.4%) in the United States have been raped at some time in their lives, including completed forced penetration, attempted forced penetration, or alcohol/drug facilitated completed penetration.][nisvs1]"

Could there be more victims of rape that are even unwilling to speak of the
crime to NCVS interviewers? Can I believe the estimates that the NCVS provides
for these violent crimes?

RAINN believes this data, and cites this series of surveys in their "Reporting
Rates" page that was cited in the original Huffington Post article. But, maybe
that is not enough to give the numbers credibility.

"The National Crime Victimization Survey (NCVS) collects information on nonfatal
crimes, reported and not reported to the police, against persons age 12 or older
from a nationally representative sample of U.S. households. During 2014, about
90,380 households and 158,090 persons were interviewed for the NCVS," the Bureau
of Justice Statistics
[describes](http://www.bjs.gov/index.cfm?ty=pbdetail&iid=5366).

The survey itself perhaps gives some insight into its low numbers, saying, "BJS
estimates of rape and sexual assault from the NCVS have typically been lower
than estimates derived from other federal and private surveys. However, the NCVS
methodology and definitions of rape and sexual assault differ from many of these
surveys in important ways that contribute to the variation in estimates of the
prevalence and incidence of these victimizations." ([page 13][ncvs13])

Here are the definitions from NCVS :

>"**Rape** is the unlawful penetration of a person against the will of the
>victim, with use or threatened use of force, or attempting such an act. Rape
>includes psychological coercion and physical force, and forced sexual
>intercourse means vaginal, anal, or oral penetration by the offender. Rape also
>includes incidents where penetration is from a foreign object (e.g., a bottle),
>victimizations against male and female victims, and both heterosexual and
>homosexual rape. Attempted rape includes verbal threats of rape. **Sexual
>assault** is defined across a wide range of victimizations, separate from rape
>or attempted rape. These crimes include attacks or attempted attacks generally
>involving unwanted sexual contact between a victim and offender. Sexual assault
>may or may not involve force and includes grabbing or fondling."

How much larger of an estimate could be made with definitions even more
inclusive than the rape and sexual assault definitions from NCVS? The 2010
National Intimate Partner and Sexual Violence Survey (NISVS) cited for the
"Nearly 1 in 5 women ..." statistic uses this [definition][nisvs17]:

>**Rape** is defined as any completed or attempted unwanted vaginal (for women),
>oral, or anal penetration through the use of physical force (such as being
>pinned or held down, or by the use of violence) or threats to physically harm
>and includes times when the victim was drunk, high, drugged, or passed out and
>unable to consent. Rape is separated into three types, completed forced
>penetration, attempted forced penetration, and completed alcohol or drug
>facilitated penetration. Among women, rape includes vaginal, oral, or anal
>penetration by a male using his penis. It also includes vaginal or anal
>penetration by a male or female using their fingers or an object. Among men,
>rape includes oral or anal penetration by a male using his penis. It also
>includes anal penetration by a male or female using their fingers or an object.

This is similar to the NCVS rape definition. The NCVS sexual assault definition
seems to overlap with the NISVS unwanted sexual contact and non-contact unwanted
sexual experience definitions.

Other reasons for the relatively low number of victimizations? Perhaps violent robbery
often affects more than 1 person, unlike rape and sexual assault does? Thus the
number of victimizations of robbery are multiplied, being much higher than the
number of incidents. What about assault? The same treatment? Victimizations are
some multiple of the incidents? NSVS does not include number of incidents, so it
is unclear how many victims there are per incident.

There is also the gender issue of rape and sexual assault, since women are more
likely to be raped. *This could make the crime seem less impactful compared to
other crimes, since it mainly affects women.* If it is true that women are the
majority of rape and sexual assault victims it does not provide implications of
a women hating society; it would be a fallacy to think that different crimes
have an equal number of male and female victims. [Page 6, table 5][ncvs6] shows
that for 2014 the number of people victimized by violent crime for men and women
is almost equal: 1,497,430 men and 1,451,110 women are estimated to be victims.
This means that men must be more likely to be victims of some other form of
violent crime if women are mainly the victims of rape and sexual assault.

Here is a graph using NVAT data :
![nvat-gender-2014-graph](./data/rape/NVAT-data/victimization-gender-2014.png)

##### Side Note: There also might be concern that women are not reporting crimes enough? :

Data is from [NVAT custom tables][ncvs-trend-tool].

![reported-unreported-gender-2014](./data/rape/NVAT-data/reported-unreported-gender-2014.png)

![percent-reported-unreported-gender-2014](./data/rape/NVAT-data/percent-reported-unreported-gender-2014.png)

In all forms of violent crime in the NCVS victimizations of females are reported
to police at a higher percentage than for victimizations of males of the same type
of crime.

Be careful of the male rape and sexual assault data; NVAT warns : "Interpret
data with caution, based on 10 or fewer sample cases or the coefficient of
variation is greater than 50%."

### Now looking at some of the FBI UCR.

Here is a glimpse at the FBI's system, "The data presented in *Crime in the
United States* reflect the Hierarchy Rule, which requires that only the most
serious offense in a multiple-offense criminal incident be counted. The
descending order of UCR violent crimes are murder and nonnegligent manslaughter,
rape, robbery, and aggravated assault, followed by the property crimes of
burglary, larceny-theft, and motor vehicle theft." (from [here][fbi-violent])
The [FBI Uniform Crime Reports, Table 1][fbi-crime], data shows that estimates
of rape are the second lowest estimates of any violent crime, in every year,
only murder and nonnegligent manslaughter is more rare. NCVS does not include
homicide, since it involves interviews with victims. [NCVS page 5][ncvs5] shows
that the rape and sexual assault has the least number of victims of any form of
crime.

The FBI revised their rape definition in 2013 to include more sexual offenses.

The [old definition][fbi-definitions2011], under the title Forcible rape, is :

>The carnal knowledge of a female forcibly and against her will. Rapes by force
>and attempts or assaults to rape, regardless of the age of the victim, are
>included. Statutory offenses (no force used―victim under age of consent) are
>excluded.

The revised [definition][fbi-rape] is: 

>Penetration, no matter how slight, of the vagina or anus with any body part or
>object, or oral penetration by a sex organ of another person, without the
>consent of the victim. Attempts or assaults to commit rape are also included;
>however, statutory rape and incest are excluded.

This bears resemblance to rape definitions from the other data, but is more
narrow. Table 1 does not include the revised definition, but
[Table 2][fbi-crime2013] does. The FBI's violent crime data (Table 1 to Table
24) does not include sexual assault or simple assault. It does include murder
and nonnegligent manslaughter. Looking at violent crimes from Table 2:

##### Violent Crime in the United States, by type, 2013

* Murder and Nonnegligent Manslaughter : 14,196
* Rape (revised definition) :  108,612
* Robbery : 345,031	
* Aggravated Assault : 724,149	

* Violent Crime : 1,191,988

* [ For reference, Rape (legacy definition) : 79,770 ]

<!-- ##### Percentage of Violent Crime, by type, 2013 -->

<!-- * Murder and Nonnegligent Manslaughter : ~1.2% -->
<!-- * Rape (revised definition) :  ~9.1% -->
<!-- * Robbery : ~28.9% -->
<!-- * Aggravated Assault : 	~60.8% -->

![FBI-violent-crime-2013](./data/rape/violent-crime-2013.png)

### To conclude why victimizations are low: 

It would seem reasonable to say that, in this case, because rape has less
victims there are less victimizations than other forms of violent crime from the
NCVS.

![victims-vs-victimizations](./data/rape/NVAT-data/victims-vs-victimizations-2014.png)

Data from [page 2][ncvs2] and [page 5][ncvs5].

It can be seen on the graph, that rape and sexual assault victims are slightly
more likely to repeatedly be victimized by the same type of crime. The
correlation between number of victims of a violent crime and number of
victimizations of a violent crime is quite linear, though.

##The RAINN "Report Rates" page is shocking in how much misinformation it presents.

It misrepresents the data from the NCVS saying that:

>"The majority of sexual assault are not reported to the police (an average of
>68% of assaults in the last five years were not reported). Those rapists, of
>course, will never spend a day in prison."

The data from the table,
["Percent of victimizations reported to police, by type of crime,"][ncvs7]
composes [two different definitions, rape and sexual assault][ncvs13]: "Sexual assault is
defined across a wide range of victimizations, separate from rape or attempted
rape. These crimes include attacks or attempted attacks generally involving
unwanted sexual contact between a victim and offender." These two crimes are
lumped together in the data. "Sexual assault may or may not involve force and
includes grabbing or fondling," which is a rather broad definition that
contributes to the number of victimizations. A subdivision of the two is not
provided in the 2014 edition (2008 and earlier editions have subdivison of
victimizations, but not for percentage reported to police), so it is unclear how
often either is reported. It is possible that sexual assault is reported more
often than rape, thus less than 33.6% of rape victimizations were reported for
2014, and it is also possible that rape is more often reported and sexual
assault is reported less. There is also the combination of rape and attempted
rape, that is unclear how often either is reported, and may be a factor if
victims trivialize attempted rape. The NCVS definitions of rape and sexual
assault are different, and also, the data that RAINN cites uses victimizations
of rape and sexual assault reported to police, not rapists or number of rapes
reported to police. Their claims citing the NCVS are misleading. How do they
"factor in unreported rapes"?

It is not apparent where RAINN obtained their second and third statistics from
the FBI UCRs. The claims say, "out of 100 rapes, 7 lead to arrest and 3 are
referred to prosecutors."
[Estimated Number of Arrests, 2013, Table 29][fbi-arrests2013] shows that there
were 16,863 arrests whose most serious offense was rape and
[Table 2][fbi-crime2013] estimates 108,612 rapes. That is ~0.155 arrests per
incident for rape, or ~15.5 arrests every 100 incidents. For
[2010 arrests][fbi-arrests2010], the last year of UCRs RAINN cites, which uses
the legacy definition of rape, there were 20,088 arrests whose most serious
offense was forcible rape and from [UCR Table 1][fbi-crime], 2010 had 85,593
estimated incidents of rape. That is ~0.235 arrests per incident, or ~23.5
arrests per 100 incidents. The 2013 arrests data also has 57,925 arrests for
"Sex offenses (except rape and prostitution)," which probably includes statutory
rape and other forms of sexual assault.
[FBI UCR offenses cleared data][fbi-clearances2013] does not specify the number
of people turned over to courts for prosecution. The definition of a cleared
offense includes, but is not limited to, being referred to a prosecutor, and
data on the number of each type of clearance is not provided. 

Here are portions of the definitions :

> In the FBI’s Uniform Crime Reporting (UCR) Program, law enforcement agencies
> can clear, or “close,” offenses in one of two ways: by arrest or by
> exceptional means.

> **Cleared by Arrest**: 
>In the UCR Program, a law enforcement agency reports
>that an offense is cleared by arrest, or solved for crime reporting purposes,
>when three specific conditions have been met. The three conditions are that at
>least one person has been: 
>
> - Arrested.
>
> - Charged with the commission of the offense.
>
> - Turned over to the court for prosecution (whether following arrest,
>court summons, or police notice).

> **Cleared by exceptional means**:
>
> In certain situations, elements beyond law enforcement’s control prevent the
> agency from arresting and formally charging the offender. When this occurs,
> the agency can clear the offense exceptionally. Law enforcement agencies must
> meet the following four conditions in order to clear an offense by exceptional
> means. The agency must have:
>
> - Identified the offender.
> 
> - Gathered enough evidence to support an arrest, make a charge, and turn over
> the offender to the court for prosecution.
> - Identified the offender’s exact location so that the suspect could be taken
>   into custody immediately.
> - Encountered a circumstance outside the control of law enforcement that
> prohibits the agency from arresting, charging, and prosecuting the offender.

[Read the page][fbi-clearances2013] for more detailed defintions, and see
[Table 25][fbi-cleared2013] for the data.

I also want to point out that: just because someone has been arrested for
a crime, it doesn't mean they committed the crime.

#### Here are graphs comparing arrests of violent crimes in 2013:

![arrests-incidents-2013](./data/rape/arrests-incidents-2013.png)
![FBI-violent-crime-2013](./data/rape/violent-crime-2013.png)
![arrests-2013](./data/rape/arrests-2013.png)

When comparing the number of incidents to the number of arrests, rape has the
least number of arrests per incident, and murder and nonnegligent manslaughter
has the highest number of arrests per incident. This fact is noticeable when
comparing proportions of violent crime and proportions of arrests of violent
crime. Reporting rates of rape could be a factor in the low number of arrests
being made, but robbery had the highest report rate of NCVS violent crimes.
There are factors that affect arrests that don't seem to be in the data, such
as, how much information police need in order to arrest someone for a crime.

Here is a section of and link to a [U.S arrest definition][arrest-definition]:

>An arrest is using legal authority to deprive a person of his or her freedom of
>movement. An arrest is generally made with an arrest warrant. An arrest may be
>made without a warrant if probable cause and exigent circumstances are
>presented at the time of the arrest.

#### Why is the percentage of rape and sexual assault victimizations reported to police lower in comparison to other violent crimes?

It appears unclear to me from the data. Speculating that rape and sexual assault
is an actual cultural norm, or, even that this percentage is an urgent problem
that needs to be addressed, seems unfounded. Many more people claim to be victims
of assault, as well as robbery, and more victimizations of these other violent
crimes go unreported.

The data from the NCVS and the FBI's UCR cited by RAINN doesn't seem to support
the claims that "rape culture is real" in the U.S and that "rape is a grossly
underreported crime". Rape and sexual assault is apparent, but is a minority of
violent crime ([FBI Uniform Crime Reports, Table 1][fbi-crime]).

The [NCVS][ncvs-trend-pdf] and [FBI][fbi-crime] data also shows that violent
crime has a decreasing trend, in every type of crime, since the 1990's.

It is difficult from these measurements to try to interpret the events of
incidents of crime. The [NCVS definitions][ncvs-definitions] are broad and
include verbal threats of the crime. Taking the data as a rough indication of
the amount of different forms of crime seems to be its purpose, since the
authors do not provide much analysis as to the reason why crimes have their
number of victims and frequency. They mainly highlight annual trends in the
numbers.

If you want to look for yourself NCVS data can be compiled
[here][ncvs-trend-tool], and more FBI data can be found
[here][fbi-ucr].

# Justice System Often Doesn't Protect Sexual Abuse Victims?

Now looking at the claim that victims of sexual abuse
"[face a justice system that often doesn't protect them](http://rhrealitycheck.org/article/2016/01/08/victims-rape-sexual-assault-failed-criminal-justice-system-increasingly-seek-civil-remedies/)".
Protection seems to mean: those accused are prosecuted and convicted in court.

My summary of this reference is that victims of rape are increasingly filing
civil suits against their alleged rapists, rather than filing criminal suits.
The article distinguishes the two different forms of legal trials by saying that
:

>Unlike criminal trials, which require the prosecution to prove the defendant’s
>guilt “beyond a reasonable doubt,” civil trials have a much lower bar,
>requiring only that a plaintiff persuade a judge or jury that it is more likely
>than not that the events occurred.

A longer description of the difference between the two can be found
[here](http://www.cscja-acjcs.ca/criminal_civil_law-en.asp?l=4). 

Criminal law is the standard by which homicide and assault cases are
tried, but this system is failing rape and sexual assault victims, the author
claims, because:

> [victims] frequently face juries
> [biased by cultural assumptions about rape](http://www.aequitasresource.org/EducatingJuriesInSexualAssaultCasesPart1.pdf).

and :

> according to a
> [recent White House report](https://www.whitehouse.gov/sites/default/files/docs/sexual_assault_report_1-21-14.pdf#page=9),
> ...“law enforcement officers and prosecutors are not fully trained on the
> nature of these crimes or how best to investigate and prosecute them.”

and :

>“We [in society] generally don’t second-guess people who say that they were
>burglarized or say that their car was stolen or who say that they were
>assaulted, but we absolutely second-guess people that claim that they were
>sexually assaulted,” former special victims prosecutor Roger Canaff told RH
>Reality Check in a phone interview. “We either are skeptical of the truth of
>the allegation or we look to blame that person.”

Also from the Rape Culture is Real article :

>“If we already despise rapists, why are they so rarely held accountable in any
>way?,” Friedman asks. An analysis by RAINN found that 97% of rapists never
>spend a single day in jail for their crimes. “What we really despise is the
>idea of rapists: a terrifying monster lurking in the bushes, waiting to pounce
>on an innocent girl as she walks by,” Friedman says. “But actual rapists, men
>who are usually known to (and often loved by) their victims? Men who are
>sometimes our sports heroes, political leaders, buddies, boyfriends and
>fathers? Evidence suggests we don’t despise them nearly as much as we should.”

I shall now look at the BJS'
[Felony Defendants in Large Urban Counties (FDLUC), 2009](http://www.bjs.gov/content/pub/pdf/fdluc09.pdf)
(cited by RAINN in their claim that "out of 100 rapes 2 lead to a felony
conviction and 2 rapists will spend a single day in prison") and
[Felony Sentences in State Courts (FSSC), 2006](http://www.bjs.gov/content/pub/pdf/fssc06st.pdf),
and to try to see how rape and sexual assault sentencing and convictions compare
to other forms of crime. Both data sets deal with state level criminal trials.
If sexual assault cases face so many difficulties in courts, as the "Victims of
Sexual Assault, Failed by Justice System, ... " article claims, then it should
be reflected in the felony conviction data.

Is it disconcerting that someone criticizing the U.S justice system implies that
Kesha should be treated better than "normal" people because of her privilege?
Isn't it the other way around? People should win because of their lack of
privileges? Or would it be that she can't win because she is opposing someone
who has even more privileges, such as more wealth, and a better gender? Or
shouldn't it be that no one has any privileges in court based on their wealth,
appearance, race, gender, and occupation? I'm confused as to what the
implications are of this author's language.
[~14% of U.S population is black](http://blackdemographics.com/population/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/alDaBwuRxKQ"
frameborder="0" allowfullscreen></iframe>

Zerline Maxwell once said, "The truth is ugly. But by denying the obvious we
continue to allow rapists to go unpunished and leave survivors silenced."

Victimizations are a rather general measure of criminal activity, since in
counting number of victimizations many things could have occurred during the
incidents of the crime. Victimizations count in multiple types of crimes for 1
victim, such as a victim of robbery could have been assaulted and raped, then
would be counted in all 3 types of victimization for that 1 incident and this
person would be counted as a victim of all 3. It also counts multiple instances
with 1 person, so, in cases like domestic violence, someone could be victimized
several times and each time counts as a victimization. This inflates the
victimizations relative to the number of victims of a particular crime if a
perpetrator is not stopped and is allowed to repeat the act on the same victim.

We can look at victimizations per victim for each type of violent crime to see
how often a victim is repeatedly victimized (data from [page 2][ncvs2] and
[page 5][ncvs5]) :

{% highlight js %}
Victimizations per Victim 2014

equation
victimizations / victims = victimizations per victim

Rape and Sexual Assault
284,350 / 150,420     =  ~1.890

Robbery
664,210 / 435,830     =  ~1.524

Aggravated Assault
1,092,090 / 681,280   =  ~1.603

Simple Assault
3,318,920 / 1,842,100 =  ~1.802

{% endhighlight %}

Rape and sexual assault does have a slightly above average number of victims
repeatedly being victimized, with robbery being the least likely crime to
repeatedly experience. This does not show how many people are affected per crime
incident, but it does show that victimizations of rape, sexual assault, and
simple assault affect a more concentrated group of victims, relative to robbery
and aggravated assault. It is possible that these crimes are more easily
repeated on victims.

Be careful of what you read, hear, and believe.

[ncvs-trend-tool]: http://www.bjs.gov/index.cfm?ty=nvat
[ncvs-trend-pdf]: data/NCVS_trend1993-2014.pdf#zoom=250
[ncvs-rape-trend-pdf]: data/rape/NCVS_rape_trend1993-2014.pdf#zoom=250
[ncvs2]: http://www.bjs.gov/content/pub/pdf/cv14.pdf#page=2
[ncvs3]: http://www.bjs.gov/content/pub/pdf/cv14.pdf#page=3
[ncvs5]: http://www.bjs.gov/content/pub/pdf/cv14.pdf#page=5
[ncvs6]: http://www.bjs.gov/content/pub/pdf/cv14.pdf#page=6
[ncvs7]: http://www.bjs.gov/content/pub/pdf/cv14.pdf#page=7
[ncvs13]: http://www.bjs.gov/content/pub/pdf/cv14.pdf#page=13
[ncvs-definitions]: http://www.bjs.gov/index.cfm?ty=tp&tid=31#terms_def

[nisvs1]: http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf#page=11
[nisvs17]: http://www.cdc.gov/violenceprevention/pdf/nisvs_report2010-a.pdf#page=27

[fbi-ucr]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/cius-home
[fbi-crime]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/tables/1tabledatadecoverviewpdf/table_1_crime_in_the_united_states_by_volume_and_rate_per_100000_inhabitants_1994-2013.xls
[fbi-crime2013]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/tables/2tabledatadecoverviewpdf/table_2_crime_in_the_united_states_by_community_type_2013.xls
[fbi-clearances2013]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/offenses-known-to-law-enforcement/clearances/clearancetopic_final
[fbi-cleared2013]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/tables/table-25/table_25_percent_of-offenses_cleared_by_arrest_by_population_group_2013.xls
[fbi-arrests2013]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/tables/table-29/table_29_estimated_number_of_arrests_united_states_2013.xls
[fbi-arrests2010]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2010/crime-in-the-u.s.-2010/tables/10tbl29.xls
[fbi-faq]: https://www.fbi.gov/about-us/cjis/ucr/recent-program-updates/new-rape-definition-frequently-asked-questions
[fbi-violent]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/violent-crime/violent-crime-topic-page/violentcrimemain_final
[fbi-rape]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2013/crime-in-the-u.s.-2013/violent-crime/rape
[fbi-definitions2011]: https://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2011/crime-in-the-u.s.-2011/offense-definitions 

[arrest-definition]: https://www.law.cornell.edu/wex/arrest
[fdluc]:
