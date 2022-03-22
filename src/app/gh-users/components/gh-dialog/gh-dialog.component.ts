import { Component, OnInit } from '@angular/core';
import { GhRepo } from '../../models/ghRepo';
import { GhUser } from '../../models/ghUsers';
import { GhApiService } from '../../services/gh-api.service';


@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user!: GhUser
  repo!: GhRepo[]
  dataAtt: string | null = null
  dataCriacao: string | null = null
  dataRepoAtt: string | null = null
  dataRepoCriacao: string | null = null


  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (usuario) => {
        this.user = usuario

        this.dataCriacao = this.pegarData(new Date(this.user.created_at))
        this.dataAtt = this.pegarData(new Date(this.user.updated_at))
        
      }, (e) => console.log('O erro foi: ' + e)
      
    )

      this.ghService.findUserRepo(this.username).subscribe(
        (dados) => {
          this.repo = dados
          console.log('dados', dados)

          // this.dataRepoCriacao = this.pegarData(Date.parse(this.repo.created_at))
        //   this.dataRepoAtt = this.pegarData(new Date(this.repo.updated_at))
         }
      )

  }

  pegarData(data: string | Date): string {
    const date = new Date(data)

    let datas = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]

    let dia = date.getDate()
    let mes = date.getMonth()
    let ano = date.getFullYear()

    const dataArray = [dia >= 10 ? dia : `0${dia}`, datas[mes], ano]
    let dataFinal = dataArray.join('/')

    return dataFinal
  }

}
