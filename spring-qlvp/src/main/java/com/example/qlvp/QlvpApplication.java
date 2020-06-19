package com.example.qlvp;
import javax.annotation.Resource;
import com.example.qlvp.service.FilesStorageService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
public class QlvpApplication  implements CommandLineRunner {
    @Resource
    FilesStorageService storageService;

    public static void main(String[] args) {

        SpringApplication.run(QlvpApplication.class, args);
    }
    @Override
    public void run(String... arg) throws Exception {
//        storageService.deleteAll();
//        storageService.init();
    }



}
