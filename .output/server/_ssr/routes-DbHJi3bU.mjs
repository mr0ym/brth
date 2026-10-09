import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DbHJi3bU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function PasswordGate({ children }) {
	const [unlocked, setUnlocked] = (0, import_react.useState)(false);
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const submit = (event) => {
		event.preventDefault();
		if (value === "Joriem") {
			setUnlocked(true);
			setError(false);
		} else {
			setError(true);
			setValue("");
		}
	};
	if (unlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "birthday-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient ambient-one",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient ambient-two",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "birthday-glass",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tiny-hearts",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "question-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "a little something private"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "birthday-title",
								children: "psst... password?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "birthday-subtitle",
								children: "only the birthday girl gets in ✨"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "gate-form",
						onSubmit: submit,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "gate-password-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: showPassword ? "text" : "password",
									value,
									onChange: (event) => {
										setValue(event.target.value);
										setError(false);
									},
									autoFocus: true,
									"aria-label": "Password",
									placeholder: "enter password",
									className: "w-full max-w-xs rounded-full border border-white/50 bg-white/40 px-5 py-3 text-center text-base text-foreground shadow-inner outline-none backdrop-blur placeholder:text-muted-foreground focus:border-primary/60"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "gate-toggle",
									onClick: () => setShowPassword((visible) => !visible),
									"aria-label": showPassword ? "Hide password" : "Show password",
									"aria-pressed": showPassword,
									children: showPassword ? "🙈" : "👁️"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								className: "glass-button yes-button",
								children: ["unlock ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "🩷"
								})]
							}),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "gate-error",
								role: "status",
								children: "nope, not it 😼 try again"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "footer-note",
				children: "made with a suspicious amount of love"
			})
		]
	});
}
var reactions = [
	"😭",
	"😼",
	"😾"
];
var messages = [
	"who is Meriem's baby",
	"wait... are you sure?",
	"really? try again 👀",
	"okay this is getting ridiculous 😤"
];
var confetti = Array.from({ length: 34 }, (_, index) => ({
	id: index,
	className: `confetti-${index % 10 + 1}`,
	emoji: [
		"🩷",
		"🌹",
		"✨",
		"💋",
		"🎉"
	][index % 5]
}));
function playNoSound(step) {
	const AudioContextClass = window.AudioContext ?? window.webkitAudioContext;
	if (!AudioContextClass) return;
	const context = new AudioContextClass();
	const now = context.currentTime;
	const frequency = [
		330,
		440,
		560
	][step] ?? 330;
	const oscillator = context.createOscillator();
	const gain = context.createGain();
	oscillator.type = step === 2 ? "square" : "sine";
	oscillator.frequency.setValueAtTime(frequency, now);
	oscillator.frequency.exponentialRampToValueAtTime(frequency * .58, now + .16);
	gain.gain.setValueAtTime(1e-4, now);
	gain.gain.exponentialRampToValueAtTime(.14, now + .015);
	gain.gain.exponentialRampToValueAtTime(1e-4, now + .2);
	oscillator.connect(gain).connect(context.destination);
	oscillator.start(now);
	oscillator.stop(now + .21);
	window.setTimeout(() => void context.close(), 300);
}
function playCelebrationSound() {
	const AudioContextClass = window.AudioContext ?? window.webkitAudioContext;
	if (!AudioContextClass) return;
	const context = new AudioContextClass();
	[
		523.25,
		659.25,
		783.99,
		1046.5
	].forEach((frequency, index) => {
		const start = context.currentTime + index * .09;
		const oscillator = context.createOscillator();
		const gain = context.createGain();
		oscillator.type = "sine";
		oscillator.frequency.value = frequency;
		gain.gain.setValueAtTime(1e-4, start);
		gain.gain.exponentialRampToValueAtTime(.16, start + .02);
		gain.gain.exponentialRampToValueAtTime(1e-4, start + .28);
		oscillator.connect(gain).connect(context.destination);
		oscillator.start(start);
		oscillator.stop(start + .3);
	});
	window.setTimeout(() => void context.close(), 800);
}
function GatedBirthdayPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BirthdayPage, {}) });
}
function BirthdayPage() {
	const [attempt, setAttempt] = (0, import_react.useState)(0);
	const [reactionKey, setReactionKey] = (0, import_react.useState)(0);
	const [celebrated, setCelebrated] = (0, import_react.useState)(false);
	const [showMessage, setShowMessage] = (0, import_react.useState)(false);
	const revealTimer = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => () => window.clearTimeout(revealTimer.current), []);
	const chooseNo = () => {
		if (attempt >= 3 || celebrated) return;
		playNoSound(attempt);
		setReactionKey((key) => key + 1);
		setAttempt((value) => Math.min(value + 1, 3));
	};
	const chooseMe = () => {
		if (celebrated) return;
		playCelebrationSound();
		setCelebrated(true);
		revealTimer.current = window.setTimeout(() => setShowMessage(true), 550);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "birthday-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient ambient-one",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ambient ambient-two",
				"aria-hidden": "true"
			}),
			celebrated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "confetti-field",
				"aria-hidden": "true",
				children: confetti.map((piece) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `confetti-piece ${piece.className}`,
					children: piece.emoji
				}, piece.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: `birthday-glass ${celebrated ? "is-celebrating" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "tiny-hearts",
						"aria-hidden": "true",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♡" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "question-wrap",
						"aria-live": "polite",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: " very important birthday question"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "birthday-title",
								children: celebrated ? "yes you are :)" : messages[attempt]
							}, celebrated ? "yes" : attempt),
							!celebrated && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "birthday-subtitle",
								children: "choose carefully, birthday boy"
							})
						]
					}),
					!celebrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `choice-stage attempt-${attempt}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "glass-button yes-button",
								onClick: chooseMe,
								children: ["me ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "🩷"
								})]
							}),
							attempt < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "no-button-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									className: "glass-button no-button",
									onClick: chooseNo,
									"aria-label": `Not me${attempt ? `, attempt ${attempt + 1}` : ""}`,
									children: "not me"
								}), reactionKey > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "reaction-burst",
									"aria-hidden": "true",
									children: reactions[attempt - 1]
								}, reactionKey)]
							}),
							attempt === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "only-choice",
								role: "status",
								children: "interesting. one option left ✨"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `birthday-message ${showMessage ? "is-visible" : ""}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "message-emoji",
								"aria-hidden": "true",
								children: "🩷 🌹 💋 😻"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "personal-copy",
								children: "Happy birthday to my baby ❤️ Im so grateful to have you in my life and I hope you know how much I love you. You mean so much to me. I hope you have the best birthday ever because you deserve nothing but happiness. Love you always 🫶 I Love You so much ❤️"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "message-emoji closing",
								"aria-hidden": "true",
								children: "😻 🩷"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "footer-note",
				children: "made with a suspicious amount of love"
			})
		]
	});
}
//#endregion
export { GatedBirthdayPage as component };
