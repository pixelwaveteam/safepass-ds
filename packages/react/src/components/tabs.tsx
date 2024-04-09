"use client"

import { ButtonHTMLAttributes, HTMLAttributes, createContext, forwardRef, useContext, useEffect, useMemo, useState } from "react";
import { cn } from "..";

interface TabsContextData {
  tabs: string[];
  selectedTab: string | undefined;
  selectTab: (tabValue: string) => void;
  addToTabs: (tabValue: string) => void;
  removeFromTabs: (tabValue: string) => void;
}

const tabsContext = createContext<TabsContextData>({} as TabsContextData)

interface TabsRootProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
}

const TabsRoot = forwardRef<
  HTMLDivElement,
  TabsRootProps
> (({ children, defaultValue,...props }, ref) => {
  const [ tabs, setTabs ] = useState<string[]>([]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultValue)

  function selectTab(tabValue: string) {
    setSelectedTab(tabValue);
  }

  function addToTabs(tabValue: string) {
    setTabs(state => {
      if(tabs.includes(tabValue)) {
        console.error(`More than one TabTrigger with the value: ${tabValue}`);
  
        return state;
      }

      return [...state, tabValue]
    });
  }

  function removeFromTabs(tabValue: string) {
    setTabs(state => state.filter(tab => tab !== tabValue));
  }

  useEffect(() => {
    if(defaultValue === undefined) {
      setSelectedTab(tabs[0])
    }

    return () => {
      setSelectedTab(undefined)
    }
  }, [tabs, defaultValue])

  useEffect(() => {
    if(tabs.length !== [...new Set(tabs)].length) {
      const uniqueTabs = [...new Set(tabs)];

      const repeatedTabsValue = uniqueTabs.filter(tab => tabs.lastIndexOf(tab) !== tabs.indexOf(tab))

      for(const repeatedTabValue of repeatedTabsValue) {
        console.error(`More than one TabTrigger with the value: ${repeatedTabValue}`);
      }
    }
  }, [tabs])

  return (
    <div
      ref={ref}
      {...props}
    >
      <tabsContext.Provider value={{ tabs, addToTabs, removeFromTabs, selectedTab, selectTab }}>
        {children}
      </tabsContext.Provider>
    </div>
  )
})

const TabsList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));

TabsList.displayName = "TabsList";

interface TabTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onClick'> {
  value: string;
}

const TabTrigger = forwardRef<
  HTMLButtonElement,
  TabTriggerProps
>(({ className, value, ...props }, ref) => {
  const { addToTabs, removeFromTabs, selectTab, selectedTab } = useContext(tabsContext)

  const isActive = useMemo(() => selectedTab === value, [selectedTab])

  function handleClick() {
    selectTab(value)
  }

  useEffect(() => {
    addToTabs(value);

    return () => {
      removeFromTabs(value);
    }
  }, [])

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      onClick={handleClick}
      data-state={isActive && 'active'}
      {...props}
    />
  )
});

TabTrigger.displayName = "TabTrigger";

interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabContent = forwardRef<
  HTMLDivElement,
  TabContentProps
>(({ className, value,...props }, ref) => {
  const { selectedTab } = useContext(tabsContext)

  if(selectedTab !== value) {
    return;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    />
  )
})
TabContent.displayName = "TabContent"

export { TabContent, TabTrigger, TabsList, TabsRoot };

