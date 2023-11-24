import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  gap: 0.5rem;
  z-index: 50;

  top: 50%;
  transform: translateY(-50%);

  right: 0;

  @media (min-width: 768px) {
    left: 1rem;
    right: unset;
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
    border-radius: 2rem;

    &::before {
      position: absolute;
      content: "";
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 2rem;
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
      border-radius: 2rem;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.4);
      background: radial-gradient(
        62.81% 328.16% at 50% 50%,
        #26303f 0%,
        rgba(59, 69, 90, 0) 100%
      );
    }
  }
`;

export const SidebarButton = styled.button`
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  outline: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    left: 0;
    right: unset;
    padding: 1rem;

    & > svg {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`;
