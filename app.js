var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const { config, engine } = require('express-edge');


var homeRouter = require('./routes/home');
var notificationsRouter = require('./routes/notifications');
var knowYourPoliceStationRouter = require('./routes/knowYourPoliceStation');
var organizationDataRouter = require('./routes/organizationData');

var videosRouter = require('./routes/videos');

//About
var aboutRouter = require('./routes/about');
var previousCommissionersRouter = require('./routes/previousCommissioners');
var achievementsAndAwardsRouter = require('./routes/achievementsAndAwards');
var visionMissionRouter = require('./routes/VisionMission');
var martyrsRouter = require('./routes/martyrs');

var organizationStructureRouter = require('./routes/organizationStructure');
var wingsRouter = require('./routes/wings');
var contactsRouter = require('./routes/contacts');
var policeDataRouter = require('./routes/policeData');
var wingsDataRouter = require('./routes/wingsData');
var rtiRouter = require('./routes/rti');
var frccRouter = require('./routes/frcc');
var crimeAlertsRouter = require('./routes/crimeAlerts');
var bestDetectionAndConvictionRouter = require('./routes/bestDetectionAndConviction');
var bharosaRouter = require('./routes/bharosa');
var sheTeamsRouter = require('./routes/sheTeams');
var hawkEyeRouter = require('./routes/hawkEye');

// Citizen Services Routes
var reportCrimeRouter = require('./routes/reportCrime');
var howToObtainRouter = require('./routes/howToObtain');
var sopsOnLandIssuesRouter = require('./routes/sopsOnLandIssues');
var faqRouter = require('./routes/faq');

// Womens corner Routes
var preventAbuseRouter = require('./routes/preventAbuse');
var affairProofRouter = require('./routes/affairProof');
var healthyRelationshipRouter = require('./routes/healthyRelationship');
var cheatingHusbandRouter = require('./routes/cheatingHusband');
var dowryHarassmentRouter = require('./routes/dowryHarassment');
var domesticViolenceRouter = require('./routes/domesticViolence');
var eveTeasingRouter = require('./routes/eve-teasing');
var saveMarriageRouter = require('./routes/saveMarriage');
var livingALoneRouter = require('./routes/livingAlone');
var maritalProblemsRouter = require('./routes/maritalProblems');
var marryingNRIRouter = require('./routes/marryingNRI');
var planningToMarryRouter = require('./routes/planningToMarry');
var preventSucideRouter = require('./routes/preventSucide');
var preventRapeRouter = require('./routes/preventRape');
var reportingDowryHarassmentRouter = require('./routes/reportingDowryHarassment');
var rightsRouter = require('./routes/rights');
var sexualHarassmentRouter = require('./routes/sexualHarassment');
var shelterHomesRouter = require('./routes/shelterHomes');
var healthyMarriageRouter = require('./routes/healthyMarriage');
var matrimonialSitesRouter = require('./routes/matrimonialSites');
var husbandsAlchoholismRouter = require('./routes/husbandsAlchoholism');
var lokAdalatRouter = require('./routes/lokAdalat');
var womenProtectionOfficersRouter = require('./routes/womenProtectionOfficers');
var secretaryLegalServicesRouter = require('./routes/secretaryLegalServices');

// Cyber Awareness Routes
var onlineBankingFraudsRouter = require('./routes/onlineBankingFrauds');
var eCommerceFraudsRouter = require('./routes/eCommerceFrauds');
var identityTheftRouter = require('./routes/identityTheft');
var lotteryFraudRouter = require('./routes/lotteryFraud');
var tipsToKeepYouSafeRouter = require('./routes/tipsToKeepYouSafe');
var onlineLoanAppFraudsRouter = require('./routes/onlineLoanAppFrauds');
var virusAttackRouter = require('./routes/virusAttack');
var socialMediaFraudsRouter = require('./routes/socialMediaFrauds');
var jobFraudsRouter = require('./routes/jobFrauds');
var cyberHygieneForChildRouter = require('./routes/cyberHygieneForChild');
var matrimonialFraudsRouter = require('./routes/matrimonialFrauds');
var cyberBullyingRouter = require('./routes/cyberBullying');
var olxFraudsRouter = require('./routes/olxFrauds');
var cryptoCurrencyFraudRouter = require('./routes/cryptoCurrencyFraud');
var cyberHygieneForWomenRouter = require('./routes/cyberHygieneForWomen');

// Drugs Awareness Routes
var drugsOverviewRouter = require('./routes/drugsOverview');
var harmfulEffectsOfDrugsRouter = require('./routes/harmfulEffectsOfDrugs');
var relevantSectionsNDPSRouter = require('./routes/relevantSectionsNDPS');
var overcomingDrugAddictionRouter = require('./routes/overcomingDrugAddiction');

// Road Safety Routes
var roadSafetyOverviewRouter = require('./routes/roadSafetyOverview');
var NHsSHsRouter = require('./routes/NHsSHs');
var roadSafetyPreventiveMeasuresRouter = require('./routes/roadSafetyPreventiveMeasures');
var roadSafetyPrecautionsRouter = require('./routes/roadSafetyPrecautions');

// Other Services Routes
var touristPolicingRouter = require('./routes/touristPolicing');
var sucidePreventionRouter = require('./routes/sucidePrevention');
var protectionofSCSTRouter = require('./routes/protectionofSCST');
var safetyTipsRouter = require('./routes/safetyTips');
var abandonedVehiclesRouter = require('./routes/abandonedVehicles');



var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(engine);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(fileUpload());

app.get('/', homeRouter);
app.get('/notifications', notificationsRouter);
app.get('/know-your-police-station', knowYourPoliceStationRouter)
app.get('/organization-data', organizationDataRouter);

app.get('/videos', videosRouter);

//About
app.get('/about', aboutRouter);
app.get('/previous-commissioners', previousCommissionersRouter);
app.get('/achievements-and-awards', achievementsAndAwardsRouter);
app.get('/vision-and-mission', visionMissionRouter);
app.get('/martyrs', martyrsRouter);

app.get('/organization-structure', organizationStructureRouter);
app.get('/wings', wingsRouter);
app.get('/contacts', contactsRouter);
app.get('/policeData', policeDataRouter);
app.get('/wingsData', wingsDataRouter);
app.get('/right-to-information', rtiRouter);
app.get('/first-responder-command-center', frccRouter);
app.get('/crime-alerts', crimeAlertsRouter);
app.get('/best-detection-and-conviction', bestDetectionAndConvictionRouter);
app.get('/bharosa', bharosaRouter);
app.get('/she-teams', sheTeamsRouter);
app.get('/hawk-eye', hawkEyeRouter);

// Citizen Services
app.get('/report-crime', reportCrimeRouter);
app.get('/how-to-obtain', howToObtainRouter);
app.get('/SOPs-on-land-issues', sopsOnLandIssuesRouter);
app.get('/frequently-asked-questions', faqRouter);

// Womens corner
app.get('/prevent-abuse-of-498A', preventAbuseRouter);
app.get('/affair-proof-of-your-relationship', affairProofRouter);
app.get('/building-healthy-relationship', healthyRelationshipRouter);
app.get('/signs-of-cheating-husband', cheatingHusbandRouter);
app.get('/dowry-harassment', dowryHarassmentRouter);
app.get('/domestic-violence', domesticViolenceRouter);
app.get('/eve-teasing', eveTeasingRouter);
app.get('/how-to-save-your-marriage', saveMarriageRouter);
app.get('/living-alone', livingALoneRouter);
app.get('/marital-problems', maritalProblemsRouter);
app.get('/marrying-nri', marryingNRIRouter);
app.get('/planning-to-marry', planningToMarryRouter);
app.get('/how-do-i-prevent-sucide', preventSucideRouter);
app.get('/prevent-rape', preventRapeRouter);
app.get('/reporting-dowry-harassment', reportingDowryHarassmentRouter);
app.get('/rights', rightsRouter);
app.get('/sexual-harassment-at-work', sexualHarassmentRouter);
app.get('/shelter-homes', shelterHomesRouter);
app.get('/tips-for-healthy-marriage', healthyMarriageRouter);
app.get('/choosing-partner-from-matrimonial-sites', matrimonialSitesRouter);
app.get('/coping-with-husband-alchoholism', husbandsAlchoholismRouter);
app.get('/chairman-lok-adalat', lokAdalatRouter);
app.get('/women-protection-officers', womenProtectionOfficersRouter);
app.get('/secretary-district-legal-services-authority', secretaryLegalServicesRouter);

// cyber Awareness
app.get('/online-banking-frauds', onlineBankingFraudsRouter);
app.get('/ecommerce-frauds', eCommerceFraudsRouter);
app.get('/identity-theft', identityTheftRouter);
app.get('/lottery-fraud', lotteryFraudRouter);
app.get('/tips-to-keep-you-safe', tipsToKeepYouSafeRouter);
app.get('/online-loan-app-frauds', onlineLoanAppFraudsRouter);
app.get('/virus-attack-and-ransomware', virusAttackRouter);
app.get('/social-media-frauds', socialMediaFraudsRouter);
app.get('/job-frauds', jobFraudsRouter);
app.get('/cyber-hygiene-for-children', cyberHygieneForChildRouter);
app.get('/matrimonial-frauds', matrimonialFraudsRouter);
app.get('/cyber-bullying', cyberBullyingRouter);
app.get('/olx-frauds', olxFraudsRouter);
app.get('/crypto-currency-fraud', cryptoCurrencyFraudRouter);
app.get('/cyber-hygiene-for-women', cyberHygieneForWomenRouter);

// Drugs Awareness
app.get('/drugs-overview-overview', drugsOverviewRouter);
app.get('/harmful-effects-of-drugs', harmfulEffectsOfDrugsRouter);
app.get('/relevant-sections-of-ndps', relevantSectionsNDPSRouter);
app.get('/overcoming-drug-addiction', overcomingDrugAddictionRouter);

// Road Safety
app.get('/road-safety-awareness', roadSafetyOverviewRouter);
app.get('/NHs-and-SHs-in-warangal', NHsSHsRouter);
app.get('/road-safety-preventive-measures', roadSafetyPreventiveMeasuresRouter);
app.get('/road-safety-precautions', roadSafetyPrecautionsRouter);

// Other Services
app.get('/tourist-policing', touristPolicingRouter);
app.get('/sucide-prevention', sucidePreventionRouter);
app.get('/protection-of-sc-st', protectionofSCSTRouter);
app.get('/safety-tips', safetyTipsRouter);
app.get('/abandonedVehicles', abandonedVehiclesRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err
	});
});

module.exports = app;
