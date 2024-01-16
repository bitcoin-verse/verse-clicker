import styled from "styled-components";

import { Button } from "../Button";
import { colors } from "../colors";

export const Wrapper = styled.div<{ $mobileVersion?: boolean }>`
  display: ${({ $mobileVersion }) => ($mobileVersion ? "flex" : "none")};
  flex-direction: column;
  margin: 1rem;

  @media (min-width: 768px) {
    align-items: center;
    display: ${({ $mobileVersion }) => ($mobileVersion ? "none" : "flex")};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoostTiles = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const BoostButton = styled.button`
  background: linear-gradient(0deg, #0f1823, #0f1823),
    radial-gradient(
      117.51% 1182.96% at 50% 50%,
      #273953 0%,
      rgba(0, 0, 0, 0) 100%
    );
  border: 1px solid;
  border-image-source: radial-gradient(
    117.51% 1182.96% at 50% 50%,
    #273953 0%,
    rgba(0, 0, 0, 0) 100%
  );

  box-sizing: border-box;
  z-index: 0;
  position: relative;
  min-width: fit-content;
  white-space: nowrap;
  min-height: 3.188rem;
  flex: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  text-align: left;
  cursor: pointer;

  @media (min-width: 768px) {
    min-width: 9.5rem;
    width: 100%;
  }

  &::before {
    position: absolute;
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    background: linear-gradient(0deg, #0f1823, #0f1823),
      radial-gradient(
        117.51% 1182.96% at 50% 50%,
        #273953 0%,
        rgba(0, 0, 0, 0) 100%
      );
  }

  &::after {
    content: "";
    z-index: -2;
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    position: absolute;
    border-radius: 12px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
    background: radial-gradient(
      62.81% 328.16% at 50% 50%,
      #26303f 0%,
      rgba(59, 69, 90, 0) 100%
    );
  }
`;

export const Label = styled.div<{ $unlocked: boolean; $cta?: boolean }>`
  & > div {
    display: flex;
    align-items: center;
    color: ${({ $unlocked, $cta }) => {
      if ($cta) return colors.primaryBlue100;
      return $unlocked ? colors.green100 : colors.shade80;
    }};
  }

  font-size: 1rem;
  font-weight: 600;

  gap: 0.25rem;
  display: flex;
  align-items: center;
`;

export const Boost = styled.div<{ $unlocked: boolean }>`
  color: ${({ $unlocked }) => ($unlocked ? colors.white : colors.shade80)};
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Divider = styled.div`
  border: 0.063rem solid ${colors.shade30};
  width: 100%;
`;

export const Icon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Price = styled.div`
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const Footnote = styled.div`
  & > span,
  a {
    font-size: 0.75rem;
  }
`;

export const Description = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: ${colors.shade80};

  & > span {
    color: ${colors.white};
  }
`;
