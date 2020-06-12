package com.example.qlvp.service;

import com.example.qlvp.entities.Room;
import com.example.qlvp.entities.Seat;
import com.example.qlvp.repository.RoomRepository;
import com.example.qlvp.repository.SeatRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class SeatServiceImpl implements  SeatService {
    @Autowired
    private SeatRepsitory seatRepsitory;

    @Override
    public List<Seat> findAll() {
        return seatRepsitory.findAll();
    }

    @Override
    public Seat save(Seat seat) {
        return seatRepsitory.save(seat);
    }

    @Override
    public void update(Seat seat) {
        seatRepsitory.save(seat);
    }

    @Override
    public void delete(Long id) {
        seatRepsitory.deleteById(id);
    }

    @Override
    public Optional<Seat> findOne(Long id) {
        return seatRepsitory.findById(id);
    }
}
