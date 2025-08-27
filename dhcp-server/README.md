

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

sudo systemctl restart isc-dhcp-server
sudo systemctl restart dnsmasq

```


## Required Interface Configs


### /etc/netplan/01-network.yaml
```yaml

network:
  version: 2
  renderer: networkd
  ethernets:
    eth1:
      dhcp4: false
      addresses:
        - 172.16.13.1/24 # need to fixed ip address as dhcp-server

```

### /etc/hosts
```
# add the config as follow
172.16.13.1	aib.avalue.com
```