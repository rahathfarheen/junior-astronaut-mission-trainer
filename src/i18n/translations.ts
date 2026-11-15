export type Locale = 'en' | 'hi' | 'kn';
export const translations: Record<Locale, Record<string, string>> = {
  en: { missionOverview: 'Mission overview', trainingMissions: 'Training missions', chooseMission: 'Choose your next mission', readyForLaunch: 'Ready for launch' },
  hi: { missionOverview: 'मिशन अवलोकन', trainingMissions: 'प्रशिक्षण मिशन', chooseMission: 'अपना अगला मिशन चुनें', readyForLaunch: 'लॉन्च के लिए तैयार' },
  kn: { missionOverview: 'ಮಿಷನ್ ಅವಲೋಕನ', trainingMissions: 'ತರಬೇತಿ ಮಿಷನ್‌ಗಳು', chooseMission: 'ನಿಮ್ಮ ಮುಂದಿನ ಮಿಷನ್ ಆಯ್ಕೆಮಾಡಿ', readyForLaunch: 'ಉಡಾವಣೆಗೆ ಸಿದ್ಧ' },
};
export function translate(locale: Locale, key: string): string { return translations[locale][key] ?? translations.en[key] ?? key; }
