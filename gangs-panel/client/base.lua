local Tunnel = module("vrp","lib/Tunnel")
local Proxy = module("vrp","lib/Proxy")
src = Tunnel.getInterface("gangs-panel",src)

local menuIsOpen = false

function ToogleTablet() 
	menuIsOpen = not menuIsOpen
	SendNUIMessage({ showTablet = menuIsOpen })
  SetNuiFocus(menuIsOpen,menuIsOpen)
end