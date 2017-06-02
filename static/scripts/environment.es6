/* eslint-env es6 */
/* eslint no-console: 0 */

'use strict';

const startingPositions = {};
function registerPositionFn(name, fn) {
	startingPositions[name] = fn;
}

const RAD2DEG = 180 / Math.PI;

function cylindricalToCartesian(phi, h, r) {
	return {
		x: r * Math.cos(phi),
		y: h,
		z: r * Math.sin(phi)
	};
}

// for setting the camera positions on the stage layout
registerPositionFn('environment-stage', function stage(el, mode, id) {

	const cols = 12;
	const angle = 12;
	const row = Math.floor(id / cols);

	// radians
	const pos = cylindricalToCartesian(
		(220 + (id % cols) * angle) / RAD2DEG,
		0.4 + row * 2,
		(5 + row) * 2
	);

	if (mode === 'guest') {
		el.setAttribute('position', `${pos.x} ${pos.y} ${pos.z}`);
		el.setAttribute('rotation', '0 180 0');
	}
	if (mode === 'speaker') {
		el.setAttribute('position', '3 0 0');
	}
});

// for setting the camera positions on the desert layout
registerPositionFn('environment-desert', function (el, mode, id) {
	el.setAttribute('position', seats[id * 3] + ' ' + seats[id * 3 + 1] + ' ' + seats[id * 3 + 2]);
	if (mode === 'speaker') {
		el.setAttribute('rotation', '0 180 0');
		el.setAttribute('position', '3 0 0');
	}
});

const seats = [7.896887812029068, 1.0988333202982545, 11.043189810322119, 6.092101578994041, 1.1884719389862468, 13.01849895522043, -7.768658844433174, 1.0626106209314337, 12.738590067818796, -5.253474184437517, 1.3971709678351587, 12.990199674789002, -3.0423347949018207, 1.3973926057029828, 14.283545812940648, -0.7963103538775242, 1.4258164907550999, 15.477173407819443, 4.1829394652134235, 1.1643674693022597, 14.345333895496701, 1.55240516003218, 1.4422276488639625, 15.709711801127835, -10.160121779406252, 1.1280136326828334, 11.792962351115108, -12.472729360952378, 1.26931458659881, 10.42693677983663, -15.16297297102794, 0.9730164299951376, 9.348478437956555, -16.996153323141787, 1.3278220682582642, 7.698275784741614, 9.738938741328443, 0.9989408106498558, 10.192976064860527, 7.253241296984746, 2.0600259304046595, 14.421084060407024, 5.185018579173321, 2.1600181089356703, 16.50632351318109, 2.0577100357307025, 2.2380212247459603, 17.917548549799896, -0.5120978648799268, 2.207702959929115, 17.833434049196626, -2.622009261860267, 2.2127626726107934, 16.977720441911913, -5.0285878898404395, 2.027223527188646, 15.558593746977273, -7.127593334245136, 2.0243230603262283, 14.699667958698416, -9.25926466254687, 1.9981941517739443, 14.077981364193143, -11.209587063200678, 2.3474550707377517, 13.276490646390192, -13.303987765451724, 2.136116428590743, 12.148622803412376, -15.233925855801553, 2.2789294031803884, 10.962942596934294, -17.267563031711493, 2.292800735561414, 9.941298325714069, 9.071718325151629, 2.060025930404663, 13.516237169349191, 10.893530824952, 1.9536255174195887, 12.175669165174488, 11.81123134878357, 1.108448113907361, 9.105483428680339, 13.34032867882703, 2.1766075544190535, 11.402541891533676, 13.433252554857845, 0.8052143739162858, 7.526470160472531, 14.373576421670684, 2.060025930404663, 9.810437155193188, 15.641246042569497, 2.060025930404663, 8.137392884243937, 15.299298781639054, 0.7835297343169536, 5.6165249221022435, 18.098196317428975, 1.526835004546978, 5.591189051182575, -18.306741476149796, 1.2347114781808521, 6.215725072294422, -20.649957918351102, 1.258704935056059, 5.491696018834002, -19.357104097365625, 2.299353476044651, 8.359374831238366, -21.868916554573154, 2.0467171927956045, 7.049750867325237, 19.293145201524876, 2.454931313665167, 8.377458844870564, 17.677686993339922, 2.7006549323780717, 10.017428537607616, 4.219193832649047, 3.134397042483574, 19.390734292830835, 6.678263214536333, 2.7938348111586215, 18.652409516613215, 0.8843037168186518, 3.5467785132090093, 19.996515788685265, -1.9377940034528915, 3.3613207380122283, 19.72408141310843, -3.205411535655311, 2.880894211552892, 19.01834286638197, -6.726447407118388, 3.178399150158409, 17.600724741360825, 8.310228340499636, 2.4635827390490768, 16.96822606369945, 9.752425806376802, 2.529590537036132, 15.816921696394587, 11.75589477366246, 2.64151405471711, 14.595320347709322, 13.257684307069598, 2.7554300233858164, 13.631951319842408, 15.515267784837974, 2.879262347172343, 12.55232420538502, -5.002174033666429, 2.8372226051043796, 18.61959215240506, -8.415739567622254, 3.005370679615144, 16.65828866625243, -10.454610869436952, 2.8386273831555506, 15.95658104305765, -12.048758142682068, 3.5179144191910225, 15.091266346667172, 2.859332519338684, 4.28214642189576, 21.341280394540718, 0.431608155280033, 4.278397772240677, 22.052519782773306, -1.72303248618848, 4.257154076687247, 21.865279278629124, -3.564276046416767, 4.1665660669823765, 21.066842652388658, 5.740145012143683, 4.296152779183583, 21.388830986489538, 7.699524154815341, 3.8209890857431184, 20.30419161709665, 9.433135768045297, 3.807578487454993, 19.034044266751707, 11.054040017905772, 3.7498794263043713, 17.48201366318414, 13.167408807276871, 3.9518182016648105, 16.031991826234012, 15.013066271173793, 4.043179397522078, 14.990508346921372, 16.500999241972895, 4.515254135765705, 13.640481258241289, -5.288655322182206, 3.953899959877276, 20.530753280985138, -6.638067286378424, 3.78914877948009, 19.97045151713955, -8.211650163221512, 4.109459537361946, 18.869399386253473, -10.554215884915648, 4.074473579985053, 18.080570062021437, -14.05061769338764, 3.9542274356606377, 13.895031952593502, -12.464621636167678, 4.365111471408365, 16.757415013292544, -14.236302437811782, 5.43839307678579, 15.60316649946576, -15.829959008093386, 3.530441910038771, 12.711059195004228, -16.050444710326897, 5.190246965363158, 14.11550929430186, -17.497102363310344, 4.123169431263893, 11.426423512364906, -19.373005166133762, 3.3961589875439735, 10.670951336032125, -17.706290373580543, 5.771523570681833, 12.76254808221171, -19.694804454811287, 5.340564302346287, 11.901463717741462, 17.79022104087308, 4.39330849304211, 11.888358344721727, 19.76120883516982, 3.918878646716145, 10.507333610546889, 19.673037257574762, 6.340706902259701, 12.361524883960033, 17.89690573810175, 6.398313799558981, 13.668486074678443, 16.394785184805833, 5.4208636752695725, 15.86206916276067, 14.711059651833981, 4.703001398907169, 18.013272207431356, 12.779523389744023, 4.442624092102051, 19.603306798219418, 10.771454068880333, 4.4729343127550685, 21.042366755591775, 8.677463557947172, 4.700671606553652, 22.45305267822186, 5.249326902671423, 5.181815271374795, 23.742890087601264, 2.4719827421430143, 5.000040140627991, 23.713001808667023, -0.27089766897323087, 4.907262021749691, 24.91826826628232, -3.3146433707679437, 4.561401635879243, 24.155865900543787, 2.0471007219677406, 6.45282309183192, 25.65730564040078, 5.182416133856769, 6.877697854553851, 25.314765213438, 7.366604496408595, 6.187602891922836, 24.668405821927863, 7.08948136429179, 7.782269596588407, 26.19088309106899, 4.7569339118573515, 8.053688324013866, 27.689605748619837, 1.8912732279494007, 7.561516837505696, 27.227827875617134, -0.5537511536599765, 6.034495993523954, 26.83300125196737, -0.12989242951630667, 7.65582493792941, 28.6235353447122, -3.308001946628509, 5.862918841965872, 26.994598477511932, -2.0601446427613963, 7.687152250986131, 28.65813203914346, -5.410711927939065, 4.463430671053594, 23.426857724648723, -5.433873890085173, 5.057599675794542, 26.242379710629248, -4.907003533845547, 7.16379630972925, 28.191797990477646, -6.883142311608248, 6.408884795717022, 27.44483368739961, -7.359056138840217, 7.829568149584333, 29.07705659726416, -7.336959421647171, 5.215622358136887, 25.681385177738854, -7.504200541807011, 4.787522441784812, 23.011761311252418, 9.513035091788087, 6.015202943494867, 24.50974588707009, 8.818809290081846, 7.637295989288042, 26.002560585250315, 8.701191043108995, 8.245725631713867, 29.0132913187091, 11.137888148268665, 8.245725631713867, 29.539086120418396, 14.7471549822767, 8.245725631713867, 29.38290249172829, 16.24379982245606, 8.10190689409313, 27.46205899589181, 12.298706463975027, 7.843207139318501, 26.52736862709432, 12.53804455526305, 6.372903483012053, 24.83893823785607, 12.116639976235493, 4.881191419625491, 23.296682691147932, 14.108262944308505, 4.947140298743605, 22.677575969195175, 17.68491945090957, 7.913290240785177, 24.97943403512224, 18.946946805348656, 7.87391779670417, 22.778325081989763, 20.30232803371726, 8.119377386126352, 19.93971531310191, 19.209457354741865, 7.921458466682758, 17.073388157986138, 20.503642562331496, 7.725700002555055, 13.843653843694614, 17.867956142890662, 7.219384908055957, 16.92784725020995, 18.07454047347039, 7.443859523968907, 19.76470819362183, 16.09521046349973, 5.4630076487536385, 21.813092949412262, 15.515166053299998, 6.784727395227705, 25.036528430311417, -10.041471683922621, 8.16268622346264, 29.424370554598134, -11.792393557923512, 8.105210670707105, 27.974102360522096, -13.98671813393196, 8.245725631713867, 24.70190388159125, -15.705720598574922, 8.22968788034078, 22.260832400948956, -16.831310337243348, 8.245725631713864, 21.35058059408533, -17.221968437915457, 8.069274505991206, 19.900670042571264, -18.43003398239625, 8.24572563171387, 17.708159669129902, -18.847412830851134, 8.245725631713867, 15.95753702109952, -20.622951982032383, 7.699228706335148, 14.42203469820078, -22.624893976298868, 5.939033540737633, 12.82744620832751, -19.26043582118365, 6.939646879007903, 13.169247195880748, -16.5484661697767, 7.376922453709049, 15.659084946398131, -17.999197442030702, 7.272000418653938, 14.723739992410346, -14.50105000248354, 6.455238837986226, 17.798605559034968, -16.063954008204608, 7.9342595529469335, 19.15514311760552, -13.976327894909945, 7.574565989940837, 20.83533175790834, -12.707005344541713, 6.3882219482757385, 19.897768518149935, -12.411614847395185, 5.390334122110794, 18.714191401688172, -9.943353089495224, 5.117136860037601, 20.546039641898908, -11.31082485626483, 6.517275902044961, 22.02104410791003, -12.809845770940884, 7.879988711009151, 23.120541918768424, -10.922403065459042, 7.772142425781354, 25.7125596489038, -9.361222130314147, 7.371469173275877, 28.01225914317036, -9.062946514926095, 6.451930934418776, 26.030270829192922, -10.481387148472962, 7.368311592215537, 23.998149627969774, -9.495208259924183, 6.24911123909137, 22.74903356292922, 16.45465446336466, 5.683690740011162, 19.566765539985273, -21.781540936850913, 2.9974923632082167, 10.016000413372563, -24.5132693966885, 3.327636302930621, 11.90838244052853, 20.908548238481846, 2.1540780410992824, 7.148208478636696, 21.92248098977305, 3.8245431181840246, 9.356070005937568, 22.61524914432429, 5.86611381811862, 11.640836185438134, -24.55472814927501, 2.662040452730924, 8.732622480187896, -24.193698335725347, 2.238610780529612, 5.867078279941956, 25.10096599111751, 3.7685194586571207, 10.013544066622671, 5.34090009108801, 8.245725631713867, 31.614573890646543, 1.2256487677212706, 8.24572563171387, 31.79955238852888, -2.407092744582989, 8.245725631713867, 32.22728653418826, -6.082480000735192, 8.245725631713867, 31.805731464383943];

window.AFRAME.registerComponent('environment', {
	schema: {
		default : ''
	},
	init() {
		this.callbacks = {};
		this.el.emit('init');
	},
	update() {
		if (this.oldData === this.data) return;
		this.oldData = this.data;
		if (!this.data) {
			this.el.innerHTML = '';
			return;
		}
		const content = document.getElementById(this.data);
		if (content) {

			// get script contents or innerHTML
			this.el.innerHTML = content.text || content.innerHTML;
		}

		// Update the component's setPosition function to allow listeners to use it
		this.setPosition = startingPositions[this.data] || function () { };

		Array.from(document.querySelectorAll('[update-on-environment]')).forEach(function (el) {
			Object.keys(el.components).forEach(function (component) {
				el.components[component].update(el.components[component].data);
			});
		});

		if (this.callbacks[this.data]) {
			this.callbacks[this.data].bind(this.el)();
		}

		this.el.emit('environment-update');
	},
	registerCallback(name, fn) {
		this.callbacks[name] = fn;
	}
});