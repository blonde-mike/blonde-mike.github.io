import { useNavigate } from "react-router-dom";
import layoutRef from "./LayoutRef";
import React, { useRef } from "react";
import { MenuIcon } from "../../Base/Icons/MenuIcon";
import {
  AccordionList,
  CollapsedNavBar,
  List,
  ListItem,
  NavBase,
  NavButton,
  RotatingChevronIcon
} from "./NavBarSubs";

function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const navRef = useRef<HTMLElement>(null);
  const currentDashboardPath = useRef<string>("");

  return (
    <NavBase
      onMouseLeave={() => {
        setTimeout(() => {
          const lists = document.querySelectorAll(`${NavBase} ul.expanded`);
          lists.forEach((list) => list.classList.remove("expanded"));
          navRef.current?.classList.remove("expanded");
          const chevrons = document.querySelectorAll(
            `${NavBase} ${RotatingChevronIcon}.expanded`
          );
          chevrons.forEach((chevron) => chevron.classList.remove("expanded"));
        }, 500);
      }}
      ref={navRef}
    >
      <CollapsedNavBar />
      <MenuIcon
        id="menuIcon"
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer"
        }}
        onClick={() => {
          navRef.current?.classList.add("expanded");
          const pathSegments = currentDashboardPath.current.split("/");
          pathSegments.forEach((_, i) => {
            if (i === 0) return;
            const list = document.querySelector(`#${pathSegments[i - 1]}-list`);
            const chevron = document.querySelector(
              `#${pathSegments[i - 1]}-item > ${RotatingChevronIcon}`
            );
            if (list) {
              list.classList.add("expanded");
            }
            if (chevron) {
              chevron.classList.add("expanded");
            }
          });

          const lastSegment = pathSegments[pathSegments.length - 1];
          const targetItem = document.querySelector(`#${lastSegment}-item`);
          if (targetItem) {
            targetItem.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }}
      />
      <div id="navLists">
        {layoutRef.pages.map((page) => (
          <List key={page.name}>
            <ListItem id={`${page.name}-item`}>
              <NavButton
                onClick={() => {
                  currentDashboardPath.current = page.name;
                  navigate(page.name);
                }}
              >
                {page.name}
              </NavButton>
              <RotatingChevronIcon
                onClick={(e) => {
                  e.currentTarget.classList.toggle("expanded");
                  const sibling =
                    e.currentTarget.parentElement?.nextElementSibling;
                  if (sibling) {
                    sibling.classList.toggle("expanded");
                  }
                }}
              />
            </ListItem>
            <AccordionList id={`${page.name}-list`}>
              {page.subPages?.map((subPage) => (
                <React.Fragment key={subPage.name}>
                  <ListItem id={`${subPage.name}-item`}>
                    <NavButton
                      style={{ backgroundColor: "#ffb700" }}
                      onClick={() => {
                        currentDashboardPath.current = `${page.name}/${subPage.name}`;
                        navigate(`${currentDashboardPath.current}`);
                      }}
                    >
                      {subPage.name}
                    </NavButton>
                  </ListItem>
                </React.Fragment>
              ))}
            </AccordionList>
          </List>
        ))}
      </div>
    </NavBase>
  );
}

export default NavBar;
