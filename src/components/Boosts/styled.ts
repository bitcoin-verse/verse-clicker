import styled from "styled-components";
import { colors } from "../colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 2rem;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoostTiles = styled.div`
  display: flex;
  gap: 1rem;
  max-width: calc(100vw);
  overflow-x: auto;
  overflow-y: visible;
  padding: 1rem 0;

  @media (min-width: 768px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
    overflow: visible;
  }
`;

export const BoostButton = styled.button<{ $unlocked?: boolean }>`
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
  min-height: 3.188rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  text-align: left;
  cursor: ${({ $unlocked }) => ($unlocked ? "default" : "pointer")};

  @media (min-width: 768px) {
    min-width: 10.875rem;
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

export const Label = styled.div<{ $unlocked: boolean }>`
  color: ${({ $unlocked }) => ($unlocked ? colors.green100 : colors.shade80)};
  font-size: 1rem;
  font-weight: 600;

  gap: 0.5rem;
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
