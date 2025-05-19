import styled from "styled-components";
import { ChevronIcon } from "../../Base/Icons/ChevronIcon";
import { useNavigate, useParams } from "react-router-dom";

export const NavBase = styled.nav`
  position: fixed;
  right: 0;
  top: 5rem; /* Positioned just below the Header */
  background-color: #fff8e1; /* Light yellow background */
  border-left: 1px solid #ffd700;
  border-radius: 5px;
  border-bottom: 1px solid #ffd700; /* Yellow borders */
  padding: 10px;
  box-sizing: border-box;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: max-height 0.3s ease, max-width 0.3s ease 0.5s;

  min-width: 12.5rem;
  max-width: 100%;
  max-height: 50px;

  &.expanded {
    max-width: 200px;
    max-height: 80%;
    overflow-y: auto;
    transition: max-height 0.3s ease;
  }
  &.expanded > #navLists {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  &.expanded > #collapsedNavBar,
  &.expanded > #menuIcon {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  & > #navLists {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  & > #collapsedNavBar,
  & > #menuIcon {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const AccordionList = styled(List)`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  &.expanded {
    max-height: 100%;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Label = styled.h4`
  margin: 0;
  margin-bottom: 5px;
`;

export const PathParent = styled.span`
  cursor: pointer;
  color: #007bff;
`;

const PathDisplay = styled(Label)`
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NavButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffd700;
  color: #000; /* Yellow button with black text */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;

  &:hover {
    opacity: 0.8;
  }
`;

export const RotatingChevronIcon = styled(ChevronIcon)`
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: rotate(0deg);
  &.expanded {
    transform: rotate(90deg);
  }
`;

const CollapsedNavBarBase = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  max-width: calc(100% - 50px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
`;

const HoverSelectorList = styled.ul`
  position: fixed;
  background-color: white;
  display: flex;
  align-items: flex-start;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 10px;
  transition: max-height 0.3s ease, opacity 0.1s ease;
  list-style: none;
  margin: 0;
  margin-left: -10px;
  max-height: 0px;
  overflow: hidden;
  opacity: 0;
`;

const HoverSelectorBase = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  color: #007bff;
  font-weight: bold;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-right: 30px;
  padding-left: 10px;
  max-width: fit-content;
  background-color: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #ffd700; /* Yellow arrow */
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:hover {
    color: rgb(55, 55, 55);
    font-weight: normal;
  }

  &:hover > ${HoverSelectorList} {
    max-height: 200px;
    opacity: 1;
  }
`;

const HoverSelectorOption = styled.li`
  margin: 5px 0;
  color: black;
  text-decoration: none;
  font-weight: normal;

  &:hover {
    color: rgb(55, 55, 55);
    font-weight: bold;
  }
`;

export const CurrentPathDisplay = (): JSX.Element => {
  const { productGroup, team } = useParams();
  const navigate = useNavigate();

  if (team) {
    return (
      <PathDisplay>
        <PathParent onClick={() => navigate(`/${productGroup}`)}>
          {productGroup}
        </PathParent>{" "}
        &gt; {team}
      </PathDisplay>
    );
  } else if (productGroup) {
    return <PathDisplay>{productGroup}</PathDisplay>;
  }
  return <PathDisplay>Overview</PathDisplay>;
};

export const CollapsedNavBar = (): JSX.Element => {
  return (
    <CollapsedNavBarBase id="collapsedNavBar">
      <CurrentPathDisplay />
    </CollapsedNavBarBase>
  );
};
