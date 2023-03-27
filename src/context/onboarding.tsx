import React, { useEffect, useMemo, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import styles from '../theme/globalStyles';

export type OnboardingButton = {
  label: string;
  to: string;
  variant?: string;
  goBack?: boolean;
};

type OnboardingInfo = {
  iconUrl: string;
  text: string;
};

type OnboardingContent = {
  type: string;
  data?: OnboardingInfo[];
  properties?: {
    [key: string]: string | any[];
  };
};

export type OnboardingStep = {
  title?: string;
  subtitle?: string;
  content?: OnboardingContent;
};

type OnboardingContextParams = {
  steps?: OnboardingStep[];
  currentStep?: OnboardingStep;
  updateCurrentStep: (step?: OnboardingStep) => void;
  customStyles?: string;
  updateStyles: (style: string) => void;
};

type OnboardingProviderProps = {
  children: React.ReactNode;
};

export const OnboardingContext = React.createContext<OnboardingContextParams>({
  steps: [],
  updateCurrentStep: () => {},
  updateStyles: () => {},
});

function OnboardingProvider({ children }: OnboardingProviderProps) {
  const [steps, setSteps] = useState<OnboardingStep[]>();
  const [currentStep, setCurrentStep] = useState<OnboardingStep>();
  const [customStyles, setCustomStyles] = useState<string>();

  useEffect(() => {
    setSteps([
      {
        title: 'Going electric starts with understanding your needs',
        subtitle:
          'We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.',
        content: {
          type: 'infolist',
          data: [
            {
              iconUrl:
                'https://firebasestorage.googleapis.com/v0/b/onboarding-challenge.appspot.com/o/organization.png?alt=media&token=f356b49c-8fe7-4d43-bbe2-45090410045f',
              text: 'Tell us about your organization',
            },
            {
              iconUrl:
                'https://firebasestorage.googleapis.com/v0/b/onboarding-challenge.appspot.com/o/car.png?alt=media&token=9c0526c4-03cf-43d0-b1a0-cfd5b00a11b1',
              text: 'Tell us about your vehicles',
            },
            {
              iconUrl:
                'https://firebasestorage.googleapis.com/v0/b/onboarding-challenge.appspot.com/o/stats.png?alt=media&token=f113db70-dad1-47bf-bd7e-f3ac750704bb',
              text: 'See how much you can save',
            },
          ],
        },
      },
      {
        title: 'General Information',
        subtitle:
          'We use this information to calculate fuel costs and applicable incentives',
        content: {
          type: 'input',
          properties: {
            type: 'number',
            label: 'Zip Code',
            helperText: 'Used to check incentive applicability and fuel prices',
            placehokder: '',
          },
        },
      },
      {
        title: 'General Information',
        subtitle:
          'We use this information to calculate fuel costs and applicable incentives',
        content: {
          type: 'dropdown',
          properties: {
            label: 'Building Type',
            options: [
              {
                label: 'Home (garage)',
                value: 1,
              },
              {
                label: 'Small Office',
                value: 2,
              },
              {
                label: 'Large Office',
                value: 3,
              },
              {
                label: 'Warehouse',
                value: 4,
              },
              {
                label: 'Depot',
                value: 5,
              },
              {
                label: 'School',
                value: 6,
              },
              {
                label: 'Apartment Building',
                value: 7,
              },
            ],
          },
        },
      },
      {
        content: {
          type: 'message',
          properties: {
            children: "Thank you! We'll be in touch soon :)",
          },
        },
      },
    ]);
  }, []);

  const updateCurrentStep = (step?: OnboardingStep) => setCurrentStep(step);
  const updateStyles = (style: string) => setCustomStyles(style);

  const stepsValue = useMemo(() => ({ steps }), [steps]);

  const resolveGlobalStyle = () => {
    switch (customStyles) {
      case 'styled':
        return styles.styled;
      default:
        return styles.normal;
    }
  };

  const GlobalStyle = createGlobalStyle`${resolveGlobalStyle()}`;

  return (
    <OnboardingContext.Provider
      value={{
        ...stepsValue,
        currentStep,
        updateCurrentStep,
        customStyles,
        updateStyles,
      }}
    >
      <GlobalStyle />
      {children}
    </OnboardingContext.Provider>
  );
}

export default OnboardingProvider;
