package com.barbermanagement.controller;

import com.barbermanagement.customer.Customer;

import java.util.HashMap;

public class BarberController {
    private HashMap<Integer, Customer> customers;

    public BarberController() {
        customers = new HashMap<Integer, Customer>();
    }

    public void createCustomer(int id, String name) {
        customers.put(id, new Customer(id, name));
    }

    public void deleteCustomer(int id) {
        customers.remove(id);
    }
}
