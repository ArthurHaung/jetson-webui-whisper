

# DHCP and DNS Service Setup

This directory provides configuration and setup instructions for running a local DHCP and DNS server, typically used in isolated or embedded network environments (such as IoT, edge devices, or development testbeds). These services help automate IP address assignment and local name resolution, making network management easier and more reliable.

## Why use isc-dhcp-server and dnsmasq?

- **isc-dhcp-server**: Provides robust, configurable DHCP (Dynamic Host Configuration Protocol) services. It automatically assigns IP addresses and network configuration to devices on your LAN, ensuring devices can join the network without manual setup.
- **dnsmasq**: Offers lightweight DNS forwarding and DHCP capabilities. Here, it is used mainly for DNS forwarding and local domain management, allowing devices to resolve local hostnames and forward other queries to upstream DNS servers.

This setup is useful for:
- Creating a controlled test network
- Running local services that require consistent addressing and name resolution
- Simplifying device provisioning in a lab or demo environment

---

## Quick Install

Install the required packages:

```sh

sudo apt install isc-dhcp-server dnsmasq

sudo cp dhcpd.conf /etc/dhcp/dhcpd.conf
sudo cp local.conf /etc/dnsmasq.d/local.conf

```

# Configuration Descriptions

## dhcpd.conf
This file configures the ISC DHCP server for the subnet `192.168.100.0/24`. It sets the DHCP address range (`192.168.100.50`–`192.168.100.100`), router, DNS, subnet mask, and other DHCP options. The server is set as authoritative for this network.

## local.conf
This file configures dnsmasq to bind to interface `eth1` and IP `192.168.100.1`, sets upstream DNS servers (`168.95.1.1`, `8.8.8.8`, `1.1.1.1`), and configures the local domain as `aib.avalue.com` with host expansion enabled.


