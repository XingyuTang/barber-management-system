package com.barbermanagement.customer;

public class Customer {
    private final int id;
    private String name;

    public Customer(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (o instanceof Customer c) {
            return (c.getId() == id && c.getName().equals(name));
        }
        return false;
    }


}
