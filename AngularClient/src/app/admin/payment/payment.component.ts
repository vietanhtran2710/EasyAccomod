import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPostPaymentInfo()
  }

  unpaidPostsList: any

  targetURL = "http://localhost:8080/api/posts"
  getPostPaymentInfo() {
    this.postService.getPostPaymentInfo(this.targetURL + '?verifiedStatus=1&paymentStatus=0').subscribe(data => this.unpaidPostsList = data)
  }

  // Update upload and expired time of a post
  updatePostTime(week: number, month: number, year: number) {
    const today = new Date()
    let expiredDate = today

    expiredDate.setDate(today.getDate() + week * 30);
    expiredDate.setMonth(today.getMonth() + month)
    expiredDate.setFullYear(today.getFullYear() + year)
    return expiredDate
  }

  verifiedSuccessfully: boolean = false
  updatePostPaymentStatus(event, postID: number, postCost: number) {

    let selectedRow = event.target.parentElement.parentElement

    let postWeek = parseInt(selectedRow.childNodes[3].innerHTML)
    let postMonth = parseInt(selectedRow.childNodes[4].innerHTML)
    let postYear = parseInt(selectedRow.childNodes[5].innerHTML)
    let paidAmount = parseInt(selectedRow.querySelector('.paidAmount').value);

    let paymentStatus: boolean = paidAmount >= postCost

    let postTime = null
    let expiredTime = null

    if (paymentStatus) {
      expiredTime = this.updatePostTime(postWeek, postMonth, postYear)
      postTime = new Date()
    }

    this.postService.updatePost(postID, { postID, paidAmount, paymentStatus, postTime, expiredTime })
      .subscribe(data => {
        if (Object(data).message) {
          this.verifiedSuccessfully = true
        }
      })
  }
}
